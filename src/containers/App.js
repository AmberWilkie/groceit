import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router-dom'
import { history } from './../store/configureStore';
import { connect } from 'react-redux';

import Header from '../containers/Header';
import Login from '../containers/Login';
import ListPage from '../containers/ListPage';
import Recipes from '../containers/Recipes';

const PrivateRoute = ({component: Component, authenticated, ...props}) => {
  return (
    <Route
      {...props}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  );
};

const PublicRoute = ({component: Component, authenticated, ...props}) => {
  return (
    <Route
      {...props}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/list' />}
    />
  );
};

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Header />

          <div className="container">
            <Route exact path="/"
                   render ={ (props) =>
                   // Take out this bit while developing or you will hate yourself.
                     <Redirect to='/login'/>
                     // Use instead
                     // component = { ListPage }
                   }
            />
            <PublicRoute authenticated={this.props.authenticated }
                         path="/login" component={ Login } />
            <PrivateRoute authenticated={this.props.authenticated }
                          path="/list" component={ ListPage } />
          </div>
        </div>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenticated };
};

export default connect(mapStateToProps)(App);
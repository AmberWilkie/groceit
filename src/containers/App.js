import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import '../App.css';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { history } from './../store/configureStore';

import ListPage from './ListPage';

class App extends Component {
  render() {
    // const {} = this.props

    return (
      <ConnectedRouter history={history}>
        <div>
          Placeholder like woah.
          {/*<Header />*/}
          <Route exact path='/' component={ListPage} />
          {/*<Route path='/login' component={Login} />*/}
          {/*<Route path='/colorboxes' component={ColorBoxes} colors={data} removeBox={this.props.actions.removeColor} rotation={rotation} setRotation={this.props.actions.setRotation}  />*/}
        </div>
      </ConnectedRouter>
    );
  };
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
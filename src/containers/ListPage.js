import React from 'react'
import * as Actions from '../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import FullList from '../components/FullList'


class ListPage extends React.Component {
  componentDidMount() {
    if (this.props.items === []) {
      this.props.actions.requestList();
    }
  }

  render () {
    return (
      <FullList items={this.props.items} removeItem={this.props.actions.removeItem}/>
    )
  }
}
function mapStateToProps (state) {
  return {
    items: state.items.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);

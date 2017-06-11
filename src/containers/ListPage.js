import React from 'react'
import * as Actions from '../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import FullList from '../components/FullList'


class ListPage extends React.Component {
  componentDidMount() {
    this.props.actions.requestList();
  }

  render () {
    return (
      <FullList items={this.props.items}/>
    )
  }
}
function mapStateToProps (state) {
  return {
    items: state.fakeList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);

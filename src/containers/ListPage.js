import React from 'react'
import FakeList from '../reducers/fakelist'
import FullList from '../components/FullList'
import { connect } from 'react-redux'

const items = FakeList()

class Header extends React.Component {
  render () {

    return (
      <FullList items={items}/>
    )
  }
}
function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps)(Header)
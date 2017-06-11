import React from 'react'
import { connect } from 'react-redux'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class Header extends React.Component {
  render () {

    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <LinkContainer to='/'>
              <a href="/">Groce It, Bitch.</a>
            </LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/recipes">Recipes</NavItem>
            <NavItem eventKey={2} href="/items">Items</NavItem>
          </Nav>
          <Nav pullRight>
            <LinkContainer to='/login'>
              <NavItem eventKey={1}>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
function mapStateToProps (state) {
  return {
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps)(Header)
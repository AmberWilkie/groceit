import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <div>
        List page.
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps)(Header);
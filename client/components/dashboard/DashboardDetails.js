import React from 'react';
import { connect } from 'react-redux';

class DashboardDetails extends React.Component {

  render() {

    const { isAuthenticated, user } = this.props.auth;

    return (
      <div className = "panel panel-default">
         <div className = "panel-heading">
          Greetings
         </div>

         <div className = "panel-body">
         <p>Welcome back {user.first_name}!</p>
         </div>
         <div className = "panel-footer">
         </div>
      </div>
    );
  }
}


DashboardDetails.propTypes = {
  auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(DashboardDetails);
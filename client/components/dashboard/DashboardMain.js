import React from 'react';
import { connect } from 'react-redux';
import { sendNotification } from '../../actions/dashboardActions';

class DashboardMain extends React.Component {

  componentDidMount() {
    this.props.sendNotification();
  }

  render() {
    return (
      <div>
        <h1>DELIVERY CONFIRMED!</h1>
      </div>
    );
  }
}


export default connect(null, { sendNotification })(DashboardMain);


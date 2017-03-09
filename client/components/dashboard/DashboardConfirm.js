import React from 'react';
import Points from '../Points/Points';
import DashboardDetails from './DashboardDetails';

class DashboardConfirm extends React.Component {
  render() {
    return (
      <main className="container-fluid">
        <div className="col-md-3">
          <div className="row">
            <Points />
          </div>
          <div className="row">
            <DashboardDetails />
          </div>
        </div>
        <div className="col-md-6">
          <div className="panel panel-default">
            <div className="panel-heading">
              Points Redeemed
            </div>
            <div className="panel-body">
              You will receive a coupon by email in the next 3 business days!
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default DashboardConfirm;
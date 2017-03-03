import React from 'react';
import Points from '../Points/Points';
import DashboardMain from './DashboardMain';

class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-3">
          <div className="row">
            <Points />
          </div>
          <div className="row">
          </div>
        </div>
        <div className="col-md-9">
          <DashboardMain />
        </div>
      </div>
    )
  }
}

export default DashboardPage;
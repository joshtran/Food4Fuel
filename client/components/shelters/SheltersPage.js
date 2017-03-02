import React from 'react';
import Points from '../Points/Points';
import ShelterDetails from './ShelterDetails';
import ShelterList from './ShelterList';

class SheltersPage extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-3">
          <div className="row">
            <Points />
          </div>
          <div className="row">
            <ShelterDetails />
          </div>
        </div>
        <div className="col-md-9">
          <ShelterList />
        </div>
      </div>
    )
  }
}

export default SheltersPage;
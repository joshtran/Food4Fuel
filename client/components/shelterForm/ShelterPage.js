import React from 'react';
import ShelterConfirm from './ShelterConfirm';

class ShelterPage extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <ShelterConfirm />
        </div>
        <div className="col-md-2"></div>
      </div>
    );
  }
}

export default ShelterPage;
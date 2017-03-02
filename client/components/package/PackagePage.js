import React from 'react';
import PackageForm from './PackageForm';
import Points from '../Points/Points';
import PackageDetails from './PackageDetails'

class PackagePage extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-3">
          <div className="row">
            <Points />
          </div>
          <div className="row">
            <PackageDetails />
          </div>
        </div>
        <div className="col-md-9">
          <PackageForm />
        </div>
      </div>
    );
  }
}

export default PackagePage;
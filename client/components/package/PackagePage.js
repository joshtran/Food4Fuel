import React from 'react';
import PackageForm from './PackageForm';
import PackageMap from './PackageMap';
import Points from '../Points/Points';
import PackageDetails from './PackageDetails'

class PackagePage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-md-3">
          <div className="row">
            <Points />
          </div>
          <div className="row">
            <PackageDetails />
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            <PackageForm />
          </div>
          <div className="row">
            <PackageMap />
          </div>
        </div>
      </div>
    );
  }
}

export default PackagePage;
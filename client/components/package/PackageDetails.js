import React from 'react';
import { connect } from 'react-redux';

class PackageDetails extends React.Component {
  render() {
    // const { store, shelter, distance } = this.props.store;

    return (
      <div className = "panel panel-default">
        <div className = "panel-heading">
          Grocery Store Details
        </div>

        <div className = "panel-body">
        <dl>
          <dt>Pickup:</dt>
          <dd>Some Store</dd>
          <dt>Donation:</dt>
          <dd>Some Shelter</dd>
          <dt>Distance:</dt>
          <dd>999 kilometers</dd>
        </dl>
        </div>
        </div>
    );
  }
}

// const mapStateToProps = (state) => {

//   const store = state.groceries[0].find(x=> x.id === state.selectedStore);

//   return { store };
// }

// PackageForm.propTypes = {
//   getPackageData: React.PropTypes.func.isRequired
// }

PackageDetails.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null)(PackageDetails);

// export default connect(PackageDetails);
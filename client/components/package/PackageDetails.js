import React from 'react';
import { connect } from 'react-redux';
import { postPackageData } from '../../actions/packageActions';

class PackageDetails extends React.Component {
  render() {
    // const { store, shelter, distance } = this.props.store;

    return (
      <div className = "panel panel-default">
        <div className = "panel-heading">
          Package Details
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
          <a href='/' name='cancel'>Cancel Package</a>
        </div>

        <div className="panel-footer">
          <button className="btn btn-primary btn-block" type="submit" onClick={this.props.sendPackages('data')}>Confirm</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  packages: state.packages
}

const mapDispatchToProps = (dispatch) => ({
  sendPackages(data) {
    return () => dispatch(postPackageData(data));
  }
});

//   const store = state.groceries[0].find(x=> x.id === state.selectedStore);

//   return { store };
// }

// PackageDetails.propTypes = {
//   postPackageData: React.PropTypes.func.isRequred
// }

// PackageDetails.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }

export default connect(null, mapDispatchToProps)(PackageDetails);

// export default connect(PackageDetails);
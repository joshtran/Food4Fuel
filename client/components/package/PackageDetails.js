import React from 'react';
import { connect } from 'react-redux';
import { routeTo } from '../../routes';
import { postPackageData } from '../../actions/packageActions';


class PackageDetails extends React.Component {

  deliveryDetails(infoType, businessType, deliveryId) {
    let result;
    businessType.forEach(business => {
      if (business.id === deliveryId) {
        result = business[infoType];
      }
    });
    return result;
  }

  packageDetails(currentPackage) {
    let boxes = 0;
    for (let key in currentPackage) {
      if (key === "produce" || key === "dairy" || key === "bakedGoods") {
        let numFoodType = currentPackage[key];
        boxes += numFoodType;
      }
    }
    return boxes;
  }


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
            <dd>{this.deliveryDetails("name", this.props.groceries, this.props.deliveryGrocery)}</dd>
            <dt>Donation:</dt>
            <dd>{this.deliveryDetails("name", this.props.shelters, this.props.deliveryShelter)}</dd>
            <dt>Items in package:</dt>
            <dd>{this.packageDetails(this.props.currentDelivery)}</dd>
            <dt>Distance:</dt>
            <dd>999 kilometers</dd>
          </dl>
          <a href='/' name='cancel'>Cancel Package</a>
        </div>

        <div className="panel-footer">
          <button className="btn btn-primary btn-block" type="submit"
            onClick={this.props.sendPackages({
              shelter: this.props.deliveryShelter,
              user: this.props.auth.user.id
            })}>Confirm</button>
        </div>
      </div>
    );
  }
}




PackageDetails.propTypes = {
  auth: React.PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  packages: state.packages,
  groceries: state.groceries,
  shelters: state.shelters,
  deliveryGrocery: state.currentDelivery.deliveryGrocery,
  deliveryShelter: state.currentDelivery.deliveryShelter,
  currentDelivery: state.currentDelivery
});

const mapDispatchToProps = (dispatch) => ({
  sendPackages(data) {
    console.log("data in map dispatch/props", data);
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



export default connect(mapStateToProps, mapDispatchToProps)(PackageDetails);

// export default connect(PackageDetails);
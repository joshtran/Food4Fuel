import React from 'react';
import { connect } from 'react-redux';
import { routeTo } from '../../routes';
import { setDeliveryGrocery } from '../../actions/currentDeliveryActions';

class GroceryDetails extends React.Component {

  //this way you don't need to bind 'this'
  onClick() {
    //TODO call action to update state with selected grocery
    routeTo('/boxes');
  };

  render() {
    if(!this.props.store) {
      return <div>Pick a store</div>;
    }

    const { name, location, notes, phone_number } = this.props.store;

    return (
      <div className = "panel panel-default">
         <div className = "panel-heading">
          Grocery Store Details
         </div>

         <div className = "panel-body">
          <dl>
            <dt>Grocery Store name:</dt>
            <dd>{name}</dd>
            <dt>Pickup hours:</dt>
            <dd></dd>
            <dt>Address:</dt>
            <dd>{location}</dd>
            <dt>Phone number:</dt>
            <dd>{phone_number}</dd>
            <dt>Notes:</dt>
            <dd>{notes}</dd>
            <dt></dt>
            <dd><button className="btn btn-primary btn-lg" onClick={this.onClick.bind(this)}>Next</button></dd>
          </dl>
         </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  const store = state.groceries.find(x=> x.id === state.selectedGrocery);

  return { store };
}

export default connect(mapStateToProps)(GroceryDetails);
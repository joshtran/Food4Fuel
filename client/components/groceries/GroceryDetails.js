import React from 'react';
import { connect } from 'react-redux';


class GroceryDetails extends React.Component {
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
          </dl>
         </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  const store = state.groceries.find(x=> x.id === state.selectedStore);

  return { store };
}

export default connect(mapStateToProps)(GroceryDetails);
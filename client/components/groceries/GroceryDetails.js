import React from 'react';


class GroceryDetails extends React.Component {
  render() {
    return (
      <div className = "panel panel-default">
         <div className = "panel-heading">
          Grocery Store Details
         </div>

         <div className = "panel-body">
          <dl>
            <dt>Grocery Store name:</dt>
            <dd>Grocery1</dd>
            <dt>Pickup hours:</dt>
            <dd>5pm to 8pm</dd>
            <dt>Address:</dt>
            <dd>Street 1</dd>
            <dt>Notes:</dt>
            <dd>Blah Blah Blah Blah Blah </dd>
          </dl>
         </div>
      </div>
    );
  }
}

export default GroceryDetails;
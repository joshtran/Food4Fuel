import React from 'react';
import GroceryDetails from './GroceryDetails';
import Points from '../Points/Points';
import GroceryList from './GroceryList';

class GroceriesPage extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-3">
          <div className="row">
            <Points />
          </div>
          <div className="row">
            <GroceryDetails />
          </div>
        </div>
        <div className="col-md-9">
          <GroceryList />
          <GroceryList />
          <GroceryList />
          <GroceryList />
          <GroceryList />
        </div>
      </div>
    )
  }
}

export default GroceriesPage;
import React from 'react';
import GroceryDetails from './GroceryDetails';
import Points from '../Points/Points';
import GroceryList from './GroceryList';

class GroceriesPage extends React.Component {
  render() {
    return (
      <div>
        <main className="container-fluid">
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
          </div>
        </main>
      </div>
    )
  }
}

export default GroceriesPage;
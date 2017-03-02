import React from 'react';

class GroceryList extends React.Component {
  render() {
    return (
        <div className="col-md-3">
          <div className = "grocery-panel panel panel-default">
             <div className = "panel-heading">
              Grocery 1
             </div>
            <img className="grocery-img" src="http://placehold.it/950x650" alt="Grocery Image"/>
            <div className = "panel-body">
              <dl>
                <dt>Boxes Available:</dt>
                <dd>7</dd>
                <dt>Pickup hours:</dt>
                <dd>5pm to 8pm</dd>
              </dl>
            </div>
          </div>
        </div>

    );
  }
}

export default GroceryList;
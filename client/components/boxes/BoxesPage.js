import React from 'react';
import Points from '../Points/Points';
import BoxList from './BoxList';
import BoxDetails from './BoxDetails';

class BoxesPage extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-3">
          <div className="row">
            <Points />
          </div>
          <div className="row">
            <BoxDetails />
          </div>
        </div>
        <div className="col-md-9">
          <BoxList type="Produce" />
          <BoxList type="Dairy" />
          <BoxList type="Baked Goods" />
        </div>
      </div>
    )
  }
}

export default BoxesPage;
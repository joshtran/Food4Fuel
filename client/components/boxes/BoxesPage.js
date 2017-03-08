import React from 'react';
import Points from '../Points/Points';
import BoxList from './BoxList';
import BoxDetails from './BoxDetails';
import { withRouter } from  'react-router';
import { routeTo } from '../../routes';
import { connect } from 'react-redux';

class BoxesPage extends React.Component {

  componentDidMount() {
    if(!this.props.selectedGrocery) {
      routeTo('groceries');
      alert('Please select a Grocery store');
    }
  }

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

const mapStateToProps = (state) => ({
  selectedGrocery: state.selectedGrocery,
});

export default connect(mapStateToProps)(BoxesPage);

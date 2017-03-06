import React from 'react';
import { connect } from 'react-redux';
import { routeTo } from '../../routes';


class ShelterDetails extends React.Component {

  onClick() {
    routeTo('/package');
  };

  render() {
    if(!this.props.shelter) {
      return <div>Pick a shelter</div>;
    }

    const { name, location, notes, phone_number } = this.props.shelter;

    return (
      <div className = "panel panel-default">
         <div className = "panel-heading">
          Shelter Details
         </div>

         <div className = "panel-body">
          <dl>
            <dt>Shelter name:</dt>
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
         <div className = "panel-footer">
          <button className="btn btn-primary btn-block" onClick={() => this.onClick()}>Next</button>
         </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  const shelter = state.shelters.find(x=> x.id === state.selectedShelter);

  return { shelter };
}

export default connect(mapStateToProps)(ShelterDetails);
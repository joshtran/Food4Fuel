import React from 'react';
import { connect } from 'react-redux';


class ShelterDetails extends React.Component {
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  const shelter = state.shelters.find(x=> x.id === state.selectedShelter);

  return { shelter };
}

export default connect(mapStateToProps)(ShelterDetails);
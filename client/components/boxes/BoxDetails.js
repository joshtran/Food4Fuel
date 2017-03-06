import React from 'react';
import { connect } from 'react-redux';

class BoxDetails extends React.Component {
  render() {
    return (
      <div className = "panel panel-default">
         <div className = "panel-heading">
          Box Details
         </div>

         <div className = "panel-body">
          <dl>
            <dt>Produce:</dt>
            <dd>{this.props.produce}</dd>
            <dt>Dairy:</dt>
            <dd>{this.props.dairy}</dd>
            <dt>Pastry:</dt>
            <dd>{this.props.bakedGoods}</dd>
          </dl>
         </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  produce: state.produce,
  dairy: state.dairy,
  bakedGoods: state.bakedGoods
});

export default connect(mapStateToProps)(BoxDetails);
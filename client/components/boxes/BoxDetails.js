import React from 'react';
import { connect } from 'react-redux';
import { routeTo } from '../../routes';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/currentDeliveryActions';

class BoxDetails extends React.Component {

  onClick() {
    let actions = this.props.actions;

    actions.allProduce(this.props.produce);
    actions.allDairy(this.props.dairy);
    actions.allBakedGoods(this.props.bakedGoods)
    routeTo('/shelters');
  };

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
            <dt></dt>
            <dd><button className="btn btn-primary btn-lg" onClick={() => this.onClick()}>Next</button></dd>
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

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxDetails);
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/redeemActions';

class DashboardMain extends React.Component {
  constructor(props) {
    super(props);

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    let actions = this.props.actions;
    if (this.props.redeem >= 1000) {
      actions.decrement();
    }
  }

  increment() {
    let actions = this.props.actions;
    if ((this.props.redeem + 1000) <= this.props.reward_points) {
      actions.increment();
    }
  }

  redeem() {

  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          Redeem Points
        </div>
        <div className="panel-body">
          1000 points = $10 fuel card
          50 points per box
          {this.props.reward_points}
          <div className="col-md-5">
            <div className="box-panel panel panel-default">
              <img className="panel-img" src="/pictures/dashboard/gas.png" alt="Gas Image"/>
              <div className = "panel-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    <span className="badge">{this.props.reward_points - this.props.redeem}</span>
                    Redeemable Points
                  </li>
                  <li className="list-group-item">
                    <span className="badge">{this.props.redeem}</span>
                    Points Redeemed
                  </li>
                </ul>
              </div>
              <div className="panel-footer">
                <div className="text-center">
                  <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <button type="button" className="btn btn-default" onClick={this.decrement}>-</button>
                    <button type="button" className="btn btn-default" onClick={this.redeem}>Redeem</button>
                    <button type="button" className="btn btn-default" onClick={this.increment}>+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reward_points: state.auth.user.reward_points,
  redeem: state.redeem
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMain);
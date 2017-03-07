import React from 'react';
import { connect } from 'react-redux';

class DashboardMain extends React.Component {

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
                    <span className="badge">SOME NUMBER</span>
                    Redeemable Points
                  </li>
                  <li className="list-group-item">
                    <span className="badge">SOME NUMBER</span>
                    Points Redeemed
                  </li>
                </ul>
              </div>
              <div className="panel-footer">
                <div className="text-center">
                  <div className="btn-group btn-group-lg" role="group" aria-label="...">
                    <button type="button" className="btn btn-default">-</button>
                    <button type="button" className="btn btn-default">Redeem</button>
                    <button type="button" className="btn btn-default">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="panel-footer">

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reward_points: state.auth.user.reward_points
});

export default connect(mapStateToProps)(DashboardMain);
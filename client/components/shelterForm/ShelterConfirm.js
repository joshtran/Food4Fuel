import React from 'react';
import { connect } from 'react-redux';

class ShelterForm extends React.Component {
  render() {
    return(
      <div>
        <header className="page-header">
          <h1>New delivery! </h1>
        </header>

        <div className="panel panel-default items">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th colSpan="2">Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Stupid thing</th>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="4">
                  TOTAL:
                </th>
                <th>

                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

ShelterForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, null)(ShelterForm);
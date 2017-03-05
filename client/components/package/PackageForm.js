import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
// import validateInput from '../../../server/shared/validations/login';
// import classnames from 'classnames';
import { connect } from 'react-redux';
import { postPackageData } from '../../actions/packageActions';

class PackageForm extends React.Component {

  // componentDidMount() {
  //   this.props.getPackageData();
  // }

  render() {
    return(
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            Package
          </div>
          <div className="panel-body">
            <dl>
              <dt>You will be picking up from:</dt>
              <dd>IGA</dd>
              <dt>Your Contact at IGA:</dt>
              <dd>Godby Prick Fiat</dd>
              <dt>Pickup Notes:</dt>
              <dd>Better git it in yer soul</dd>
              <dt>You will be helping out:</dt>
              <dd>Penelope Shelter</dd>
              <dt>Your Contact at Penelope:</dt>
              <dd>Tell 'em aigue</dd>
              <dt>Pickup Notes:</dt>
              <dd>“There is a time for many words, and there is also a time for sleep.”</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

// PackageForm.propTypes = {
//   postPackageData: React.PropTypes.func.isRequired
// }

PackageForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { postPackageData })(PackageForm);
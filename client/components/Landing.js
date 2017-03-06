import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Greetings extends React.Component {

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      this.context.router.push('/groceries');
    }
  }

  render() {
    return (
      <div>
        <header className="masthead">
          <div className="container">
            <div className="row">
              <div className="tag-line col-lg-12">
                <h2>Help reduce food waste. Earn some reward points while you're at it.</h2>
              </div>
              <div className="row">
              <div className="image-container col-lg-12">
                <img className="masthead-image" src="/pictures/landing/food-graphic.png" />
                <img className="masthead-image" src="/pictures/landing/food-graphic2.png" />
                <img className="masthead-image" src="/pictures/landing/food-graphic3.png" />
              </div>
              </div>
            </div>
          </div>
        </header>
        <div className="overview container">
          <div className="row">
            <div className="heading col-sm-12">
              <h3>How it works, and why you should care</h3>
              <span className="glyphicon glyphicon-chevron-down"/>
            </div>
          </div>
          <div className="row">
            <img src="/pictures/landing/diagram.png" />
          </div>
          <div className="row">
            <div className="col-sm-4">
              <h2>Pick up surplus food</h2>
              <p>These marketing boxes are a great place to put some information. These can contain summaries of what the company does, promotional information, or anything else that is relevant to the company. These will usually be below-the-fold. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            </div>
            <div className="col-sm-4">
              <h2>Deliver the goods to those in need</h2>
              <p>The images are set to be circular and responsive. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            </div>
            <div className="col-sm-4">
              <h2>Earn reward points while reducing waste</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            </div>
          </div>
        </div>
        <footer className="landing-footer">
          <div className="row">
            <div className="col-lg-12">
              <h2>Join in, make a difference, and save a few bucks.</h2>
              <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <Link className="page-scroll" to="/signup"><button className="btn btn-lg">Sign up</button></Link>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}


Greetings.propTypes = {
  auth: React.PropTypes.object.isRequired,
}

Greetings.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Greetings);

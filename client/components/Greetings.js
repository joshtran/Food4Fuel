import React from 'react';

class Greetings extends React.Component {
  render() {
    return (
      <div>
        <header className="business-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2>Help us reduce food waste.</h2>
                <h2> And get some fuel points while you're at it.</h2>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h2>What We Do</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et molestiae similique eligendi reiciendis sunt distinctio odit? Quia, neque, ipsa, adipisci quisquam ullam deserunt accusantium illo iste exercitationem nemo voluptates asperiores.</p>
              <p>
                <button className="btn btn-default btn-lg">Call to Action</button>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" />
              <h2>Pick A Grocery Store</h2>
              <p>These marketing boxes are a great place to put some information. These can contain summaries of what the company does, promotional information, or anything else that is relevant to the company. These will usually be below-the-fold.</p>
            </div>
            <div className="col-sm-4">
              <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" />
              <h2>Pick Up The Package</h2>
              <p>The images are set to be circular and responsive. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            </div>
            <div className="col-sm-4">
              <img className="img-circle img-responsive img-center" src="http://placehold.it/300x300" />
              <h2>Drop Off The Package</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
            </div>
          </div>

          <footer>
            <div className="row">
              <div className="col-lg-12">
                <p>Copyright &copy; Food4Fuel 2017</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Greetings;
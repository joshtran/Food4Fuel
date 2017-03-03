import { connect } from 'react-redux';
import React from 'react';

class BoxList extends React.Component {

  render() {
    console.log(this.props.boxes);
    
    return (
      <div>
        <div className="col-md-4">
          <div className="panel panel-default">
            <div className = "panel-heading text-center">
              Produce
            </div>
            <img className="panel-img" src="http://placehold.it/950x650" alt="Box Image"/>
            <div className = "panel-body">
              <dl>
                <dt>Boxes Available:</dt>
                <dd>2</dd>
              </dl>
            </div>
            <div className="panel-footer">
              <div className="text-center">
                <div className="btn-group" role="group" aria-label="...">
                  <button type="button" className="btn btn-default">-</button>
                  <button type="button" className="btn btn-default">All</button>
                  <button type="button" className="btn btn-default">+</button>
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
  boxes: state.boxes
});

// const storeSelectedAction = (id) => ({ type: 'STORE_SELECTED', payload: id });

// const mapDispatchToProps = (dispatch) => ({
//   selectStore(id) {
//     return () => dispatch(storeSelectedAction(id));
//   }
// });

export default connect(mapStateToProps)(BoxList);
import { connect } from 'react-redux';
import React from 'react';

class GroceryList extends React.Component {

  className(id) {
    return `grocery-panel panel panel-default ${this.props.selectedStore === id ? 'active' : ''}`
  }

  render() {
    console.log(this.props.groceries);
    console.log(this.props.selectedStore);
    return (
      <div>
        {
          this.props.groceries.map(grocery => (
            <div key={grocery.id} className="col-md-3" onClick={this.props.selectStore(grocery.id)}>
              // <div className={this.className(grocery.id)}>
                 <div className = "panel-heading">
                  {grocery.name}
                 </div>
                <img className="panel-img" src="http://placehold.it/950x650" alt="Grocery Image"/>
                <div className = "panel-body">
                  <dl>
                    <dt>Boxes Available:</dt>
                    <dd></dd>
                    <dt>Pickup hours:</dt>
                    <dd></dd>
                  </dl>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  groceries: state.groceries,
  selectedStore: state.selectedStore
});

const storeSelectedAction = (id) => ({ type: 'STORE_SELECTED', payload: id });

const mapDispatchToProps = (dispatch) => ({
  selectStore(id) {
    return () => dispatch(storeSelectedAction(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList);
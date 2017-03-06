import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/boxActions';

class BoxList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.productType = this.productType.bind(this);
    this.all = this.all.bind(this);
  }

  boxQuantity(boxes, boxType, groceryId) {
    let availableBoxes = boxes.filter(box => {
      if (box.type === this.props.type && this.props.groceryId === box.grocery_id && box.package_id === null) {
        return box;
      }
    });
    return availableBoxes.length
  }

  increment() {
    let quantity = this.boxQuantity(this.props.boxes, this.props.type, this.props.groceryId);
    let type = this.props.type;
    let actions = this.props.actions;

    if (type === 'Produce' && this.props.produce < quantity){
      actions.incrementProduce();
    }else if (type === 'Dairy' && this.props.dairy < quantity) {
      actions.incrementDairy();
    }else if (type === 'Baked Goods' && this.props.bakedGoods < quantity) {
      actions.incrementBakedGoods();
    }
  }

  decrement() {
    let type = this.props.type;
    let actions = this.props.actions;

    if (type === 'Produce' && this.props.produce > 0){
      actions.decrementProduce();
    }else if (type === 'Dairy' && this.props.dairy > 0) {
      actions.decrementDairy();
    }else if (type === 'Baked Goods' && this.props.bakedGoods > 0) {
      actions.decrementBakedGoods();
    }
  }

  all() {
    let quantity = this.boxQuantity(this.props.boxes, this.props.type, this.props.groceryId);
    let type = this.props.type;
    let actions = this.props.actions;

    if (type === 'Produce') {
      actions.allProduce(quantity - this.props.produce)
    } else if (type === 'Dairy') {
      actions.allDairy(quantity - this.props.dairy)
    } else if (type === 'Baked Goods') {
      actions.allBakedGoods(quantity - this.props.bakedGoods)
    }
  }

  productType() {
    let type = this.props.type;
    
    if(type === 'Produce'){
      return this.props.produce
    } else if(type === 'Dairy'){
      return this.props.dairy
    } else if(type === 'Baked Goods'){
      return this.props.bakedGoods
    }
  }

  imageType (type) {
    if (type === "Produce") {
      return "/pictures/boxes/produce-graphic.png";
    } else if (type === "Dairy") {
      return "/pictures/boxes/dairy-graphic.png";
    } else {
      return "/pictures/boxes/baked-goods-graphic.png";
    }
  }

  render() {


    return (
      <div>
        <div className="col-md-4">
          <div className="box-panel panel panel-default">
            <div className = "panel-heading text-center">
              {this.props.type}
            </div>
            <img className="panel-img" src={this.imageType(this.props.type)} alt="Box Image"/>
            <div className = "panel-body">
              <dl>
                <dt>Boxes Available:</dt>
                <dd>
                  {this.boxQuantity(this.props.boxes, this.props.type, this.props.groceryId)}
                </dd>
                <dt>Boxes Selected:</dt>
                  <dd>{this.productType()}</dd>
              </dl>
            </div>
            <div className="panel-footer">
              <div className="text-center">
                <div className="btn-group" role="group" aria-label="...">
                  <button type="button" className="btn btn-default" onClick={this.decrement}>-</button>
                  <button type="button" className="btn btn-default" onClick={this.all}>All</button>
                  <button type="button" className="btn btn-default" onClick={this.increment}>+</button>
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
  boxes: state.boxes,
  groceryId: state.selectedGrocery,
  produce: state.produce,
  dairy: state.dairy,
  bakedGoods: state.bakedGoods
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxList);
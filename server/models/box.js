import bookshelf from '../bookshelf';

const Box = bookshelf.Model.extend({
  tableName: 'box',
  grocery: function() {
    return this.belongsTo(Grocery);
  }
});

export default Box;

export function getAllBoxes() {
  return Box.fetchAll()
}

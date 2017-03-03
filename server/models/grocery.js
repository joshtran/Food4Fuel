import bookshelf from '../bookshelf';

const Grocery = bookshelf.Model.extend({
  tableName: 'grocery'
});

export default Grocery;

export function getAllGroceries() {
  return Grocery.fetchAll()
}

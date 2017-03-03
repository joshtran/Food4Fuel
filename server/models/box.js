import bookshelf from '../bookshelf';

const Box = bookshelf.Model.extend({
  tableName: 'box'
});

export default Box;

export function getAllBoxes() {
  return Box.fetchAll()
}

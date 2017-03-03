import bookshelf from '../bookshelf';

const Shelter = bookshelf.Model.extend({
  tableName: 'shelter'
});

export default Shelter;

export function getAllShelters() {
  return Shelter.fetchAll();
}

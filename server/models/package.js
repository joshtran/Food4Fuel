import bookshelf from '../bookshelf';

const Package = bookshelf.Model.extend({
  tableName: 'package'
});

export default Package;

export function getAllPackages() {
  return Package.fetchAll()
}
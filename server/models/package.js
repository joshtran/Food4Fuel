import bookshelf from '../bookshelf';

const Package = bookshelf.Model.extend({
  tableName: 'package'
});

export default Package;

export function getAllPackages() {
  console.log('inside models/package.js\n');
  return Package.fetchAll().then(packages => {
    res.json({ packages });
  });
}
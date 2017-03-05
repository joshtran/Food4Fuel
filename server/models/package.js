import bookshelf from '../bookshelf';

const Package = bookshelf.Model.extend({
  tableName: 'package'
});

export default Package;

export function insertPackages(data) {
  return Package.forge({
    shelter_id: 1,
    users_id: 1,
  }, { hasTimestamps: true }).save()
}

export function deliveryValidate(data) {
  return Package.query({
    where: {id: 1}
    }).save(
    { delivered_at: new Date().toISOString() //TODO: this needs to be for the shelter form
  });
}
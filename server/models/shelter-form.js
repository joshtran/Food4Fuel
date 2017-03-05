import bookshelf from '../bookshelf';

const ShelterForm = bookshelf.Model.extend({
  tableName: 'package'
});

export default ShelterForm;

export function deliveryValidate(data) {
  return ShelterForm.add({ // was `.forge`
    delivered_at: new Date().toISOString()
  }, { hasTimeStamps: true }).save()
}
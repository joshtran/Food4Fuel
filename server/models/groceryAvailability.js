import bookshelf from '../bookshelf';

const GroceryAvailability = bookshelf.Model.extend({
  tableName: 'grocery_availability'
});

export default GroceryAvailability;

export function getAllGroceryAvailabilities() {
  return GroceryAvailability.fetchAll()
}

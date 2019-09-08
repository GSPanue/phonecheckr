import BaseModel from '../BaseModel';
import Product from '../Product';

class Supplier extends BaseModel {
  static get table() {
    return 'suppliers';
  }

  static get relationMappings() {
    return {
      products: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'suppliers.id',
          to: 'products.supplier_id'
        }
      }
    };
  }
}

export default Supplier;

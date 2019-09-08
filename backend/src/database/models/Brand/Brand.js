import BaseModel from '../BaseModel';
import Product from '../Product';

class Brand extends BaseModel {
  static get table() {
    return 'brands';
  }

  static get relationMappings() {
    return {
      products: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'brands.id',
          to: 'products.brand_id'
        }
      }
    };
  }
}

export default Brand;

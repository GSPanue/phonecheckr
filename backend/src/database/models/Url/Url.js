import BaseModel from '../BaseModel';
import Product from '../Product';

class Url extends BaseModel {
  static get table() {
    return 'urls';
  }

  static get relationMappings() {
    return {
      products: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'urls.id',
          to: 'products.url_id'
        }
      }
    };
  }
}

export default Url;

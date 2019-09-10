import BaseModel from '../BaseModel';
import Product from '../Product';

class Page extends BaseModel {
  static get table() {
    return 'pages';
  }

  static get relationMappings() {
    return {
      products: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'pages.id',
          to: 'products.page_id'
        }
      }
    };
  }
}

export default Page;

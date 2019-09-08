import BaseModel from '../BaseModel';
import Url from '../Url';
import Brand from '../Brand';
import Model from '../Model';
import Supplier from '../Supplier';

class Product extends BaseModel {
  static get table() {
    return 'products';
  }

  static get relationMappings() {
    return {
      urls: {
        relation: BaseModel.HasOneRelation,
        modelClass: Url,
        join: {
          from: 'products.url_id',
          to: 'urls.id'
        }
      },
      brands: {
        relation: BaseModel.HasOneRelation,
        modelClass: Brand,
        join: {
          from: 'products.brand_id',
          to: 'brands.id'
        }
      },
      models: {
        relation: BaseModel.HasOneRelation,
        modelClass: Model,
        join: {
          from: 'products.model_id',
          to: 'models.id'
        }
      },
      suppliers: {
        relation: BaseModel.HasOneRelation,
        modelClass: Supplier,
        join: {
          from: 'products.supplier_id',
          to: 'suppliers.id'
        }
      }
    };
  }
}

export default Product;

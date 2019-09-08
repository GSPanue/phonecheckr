import BaseModel from '../BaseModel';
import Product from '../Product';
import Colour from '../Colour';
import StorageCapacity from '../StorageCapacity';

class Model extends BaseModel {
  static get table() {
    return 'models';
  }

  static get relationMappings() {
    return {
      products: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'models.id',
          to: 'products.model_id'
        }
      },
      colours: {
        relation: BaseModel.HasOneRelation,
        modelClass: Colour,
        join: {
          from: 'models.colour_id',
          to: 'colours.id'
        }
      },
      storage_capacities: {
        relation: BaseModel.HasOneRelation,
        modelClass: StorageCapacity,
        join: {
          from: 'models.storage_capacity_id',
          to: 'storage_capacities.id'
        }
      }
    };
  }
}

export default Model;

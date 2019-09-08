import BaseModel from '../BaseModel';
import Model from '../Model';

class StorageCapacity extends BaseModel {
  static get table() {
    return 'storage_capacities';
  }

  static get relationMappings() {
    return {
      products: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Model,
        join: {
          from: 'storage_capacities.id',
          to: 'models.storage_capacity_id'
        }
      }
    };
  }
}

export default StorageCapacity;

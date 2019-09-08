import BaseModel from '../BaseModel';
import Model from '../Model';

class Colour extends BaseModel {
  static get table() {
    return 'colours';
  }

  static get relationMappings() {
    return {
      products: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Model,
        join: {
          from: 'colours.id',
          to: 'models.colour_id'
        }
      }
    };
  }
}

export default Colour;

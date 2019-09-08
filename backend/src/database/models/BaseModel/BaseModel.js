import { Model } from 'objection';

class BaseModel extends Model {
  static get tableName() {
    return this.table;
  }
}

export default BaseModel;

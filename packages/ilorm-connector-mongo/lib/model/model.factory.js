/**
 * Created by guil_ on 07/12/2017.
 */

/**
 * Create a new Mongo Model class.
 * @param {Model} ParentModel The Model used as Parent
 * @returns {MongoModel} The MongoModel created
 */
const mongoModelFactory = ({ ParentModel, }) => (
  class MongoModel extends ParentModel {
    /**
     * Generate a query targeting the primary key of the instance
     * @returns {Object} Return the query to use to target the current instance
     */
    getQueryPrimary() {
      return {
        _id: this._id,
      };
    }
  }
);

module.exports = mongoModelFactory;

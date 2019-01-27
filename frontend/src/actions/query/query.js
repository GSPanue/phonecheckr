import {
  UPDATE_QUERY
} from '../../constants';

const updateQuery = (query) => ({
  type: UPDATE_QUERY,
  payload: query
});

export {
  updateQuery
};

import {
  UPDATE_QUERY,
  SUBMIT_QUERY,
  REVOKE_SUBMIT_QUERY,
  CLEAR_QUERY
} from '../../constants';

const updateQuery = (query) => ({
  type: UPDATE_QUERY,
  payload: query
});

const submitQuery = () => ({
  type: SUBMIT_QUERY
});

const revokeSubmitQuery = () => ({
  type: REVOKE_SUBMIT_QUERY
});

const clearQuery = () => ({
  type: CLEAR_QUERY
});

export {
  updateQuery,
  submitQuery,
  revokeSubmitQuery,
  clearQuery
};

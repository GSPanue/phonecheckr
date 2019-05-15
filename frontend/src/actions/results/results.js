import {
  SHOW_RESULTS,
  HIDE_RESULTS
} from '../../constants';

const showResults = () => ({
  type: SHOW_RESULTS
});

const hideResults = () => ({
  type: HIDE_RESULTS
});

export {
  showResults,
  hideResults
};

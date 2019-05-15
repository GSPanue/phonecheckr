import {
  SHOW_PROGRESS_BAR,
  HIDE_PROGRESS_BAR
} from '../../constants';

const showProgressBar = () => ({
  type: SHOW_PROGRESS_BAR
});

const hideProgressBar = () => ({
  type: HIDE_PROGRESS_BAR
});

export {
  showProgressBar,
  hideProgressBar
};

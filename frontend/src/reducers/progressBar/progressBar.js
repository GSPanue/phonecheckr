import {
  SHOW_PROGRESS_BAR,
  HIDE_PROGRESS_BAR
} from '../../constants';

const initialState = {
  show: false
};

const progressBar = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_PROGRESS_BAR:
      return ({
        ...state,
        show: true
      });

    case HIDE_PROGRESS_BAR:
      return ({
        ...state,
        show: false
      });

    default:
      return (
        state
      );
  }
};

export default progressBar;

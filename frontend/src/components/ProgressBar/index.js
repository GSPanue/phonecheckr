import { connect } from 'react-redux';

import ProgressBar from './ProgressBar';

const mapStateToProps = ({ progressBar }) => {
  const { show } = progressBar;

  return ({
    hide: !show
  });
};

export default connect(mapStateToProps)(ProgressBar);

import PropTypes from 'prop-types';

import '../style/index';

const LandingPage = ({ children }) => children();

LandingPage.propTypes = {
  children: PropTypes.func
};

export default LandingPage;

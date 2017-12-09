import React from 'react';
import PropTypes from 'prop-types';

import '../style/index';

const LandingPage = ({ children }) => (
  <div>
    {children()}
  </div>
);

LandingPage.propTypes = {
  children: PropTypes.func
};

export default LandingPage;

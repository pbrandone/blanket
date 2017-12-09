import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const MetaHead = ({ title, description, keywords, image }) => {
  return (
    <Helmet>
      { title &&
        <title>
          {title}
        </title>
      }
      { description &&
        <meta name="description" content={description} />
      }
      { keywords &&
        <meta name="keywords" content={keywords} />
      }
      { title &&
        <meta property="og:title" content={title} />
      }
      { description &&
        <meta property="og:description" content={description} />
      }
      { image &&
        <meta property="og:image" content={image} />
      }
    </Helmet>
  );
};

MetaHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string
};

export default MetaHead;

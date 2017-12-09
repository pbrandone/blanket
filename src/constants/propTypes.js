import PropTypes from 'prop-types';

export const allPrismicDocumentNode = (propTypes, extra) => ({
  data: PropTypes.shape({
    allPrismicDocument: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            ...propTypes
          }).isRequired
        }).isRequired
      ).isRequired
    }).isRequired,
    ...extra
  }).isRequired
});

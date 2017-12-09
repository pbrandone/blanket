import PropTypes from 'prop-types';

export const collectionsData = {
  data: PropTypes.shape({
    collections: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            uid: PropTypes.string.isRequired,
            data: PropTypes.shape({
              collectionTitle: PropTypes.arrayOf(
                PropTypes.shape({
                  text: PropTypes.string.isRequired
                }).isRequired
              ).isRequired,
              gallery: PropTypes.arrayOf(
                PropTypes.shape({
                  photo: PropTypes.shape({
                    url: PropTypes.string.isRequired
                  })
                })
              )
            }).isRequired
          }).isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  }).isRequired
};

export const siteContentData = {
  data: PropTypes.shape({
    siteContent: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            data: PropTypes.shape({
              siteTitle: PropTypes.string.isRequired,
              siteDescription: PropTypes.arrayOf(
                PropTypes.shape({
                  text: PropTypes.string.isRequired
                })
              ),
              coverImage: PropTypes.shape({
                url: PropTypes.string.isRequired
              }),
              phoneNumber: PropTypes.string.isRequired,
              emailAddress: PropTypes.string.isRequired,
              instagramUrl: PropTypes.string.isRequired,
              facebookUrl: PropTypes.string.isRequired
            }).isRequired
          }).isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  }).isRequired
};

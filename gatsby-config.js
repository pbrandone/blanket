module.exports = {
  siteMetadata: {
    title: 'Blanket Studio'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'blanket',
        accessToken: 'MC5XaXJ5WGlrQUFDTm9fZ0xY.XXvvv73vv70n77-9Xwnvv73vv73vv70TBu-_ve-_vRbvv71zU0xB77-9RFfvv73vv71b77-977-9ABPvv70'
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'black',
        showSpinner: true
      }
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/assets/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    // Needs to be last in array
    'gatsby-plugin-netlify'
  ]
};

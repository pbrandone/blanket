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
        repositoryName: 'blanketphotography',
        accessToken: 'MC5XaTFNcUNrQUFNRUpKcjJx.77-977-977-977-977-9IDnvv73vv73vv71I77-9LO-_ve-_ve-_vSTvv73vv73vv73vv71TRH3vv71eQxjvv70LEGE'
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

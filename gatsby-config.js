// @ts-check

const gatsby = require('gatsby');
const path = require('path');

/**
 * @type {gatsby.GatsbyConfig}
 */
const config = {
  siteMetadata: {
    title: 'Thinking with Rust',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, 'src/pages'),
        name: 'pages',
      },
    },
  ],
};

module.exports = config;

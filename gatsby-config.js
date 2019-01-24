const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Thinking with Rust`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'src/pages'),
        name: 'pages',
      },
    },
  ],
};

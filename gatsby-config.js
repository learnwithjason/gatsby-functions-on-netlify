module.exports = {
  siteMetadata: {
    title: 'Gatsby Functions on Netlify',
  },
  flags: {
    FUNCTIONS: true,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};

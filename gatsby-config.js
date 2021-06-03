module.exports = {
  siteMetadata: {
    title: "Gatsby Functions on Netlify",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

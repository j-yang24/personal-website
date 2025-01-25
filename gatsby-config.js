module.exports = {
  siteMetadata: {
    title: "jytimes365",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home`,
        path: `${__dirname}/`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
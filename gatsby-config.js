module.exports = {
  siteMetadata: {
    title: "jytimes",
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jytimes365`,
        short_name: `jy365`,
        icon: `src/images/favicon.svg`,
      },
    },
  ],
}
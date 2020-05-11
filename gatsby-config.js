/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/src/services/`,
      },
    },
    `gatsby-plugin-playground`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `s8lc291yzkji`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `Ao2nMpRUPG3YigRYwbJYY_37s88Sxgu30Q3EOF3RkXA`,
      },
    },
  ],
}

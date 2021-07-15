const magicImporter = require("node-sass-magic-importer")

module.exports = {
  siteMetadata: {
    title: `Soldat`,
    description: `Soldat, the most popular unique 2D side-view multiplayer action game`,
    author: `Soldat Team`,
    siteUrl: 'https://soldat.netlify.app'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          importer: magicImporter(),
        },
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "content",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Soldat.pl`,
        short_name: `Soldat`,
        start_url: `/`,
        background_color: `#191d1c`,
        theme_color: `#191d1c`,
        display: `standalone`,
        icon: `src/assets/images/favicons/favicon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-plugin-svg-sprite-loader`,
      options: {
        esModule: false,
        publicPath: "/",
        // spriteFilename: 'sprites.svg',
        extract: false,
        symbolId: "[name]",
        /* SVG sprite loader options */
        pluginOptions: {
          /* SVG sprite loader plugin options */
          // plainSprite: true,
        },
      },
    },
    // NOTE: This plugin only generates output in production mode! To test, run: gatsby build && gatsby serve
    {
        resolve: `gatsby-plugin-advanced-sitemap`,
        options: {
            output: "/sitemap_index.xml",
        },
    },
    "gatsby-plugin-styled-components",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

const magicImporter = require('node-sass-magic-importer');

module.exports = {
    siteMetadata: {
        title: `Soldat`,
        description: `Soldat, the most popular unique 2D side-view multiplayer action game`,
        author: `Soldat Team`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                importer: magicImporter(),
            },
        },
        /*`gatsby-transformer-yaml`,*/
        {
            resolve: `gatsby-transformer-yaml-plus`,
            options: {
                enableRemark: true,
                markdownPreface: 'md//',
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content`,
                name: 'content',
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                tableOfContents: {
                    heading: null,
                    maxDepth: 6,
                },
            },
        },
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
                icon: `src/assets/images/favicons/favicon-512x512.png` // This path is relative to the root of the site.
            }
        },
        'gatsby-plugin-svg-sprite',
        'gatsby-plugin-styled-components',
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};

const path = require(`path`)

const config = require(`./src/utils/siteConfig`)
const generateRSSFeed = require(`./src/utils/rss/generate-feed`)
require('dotenv').config();

let ghostConfig

try {
    ghostConfig = require(`./.ghost`)
} catch (e) {
    ghostConfig = {
        production: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        },
    }
} finally {
    const { apiUrl, contentApiKey } = process.env.NODE_ENV === `development` ? ghostConfig.development : ghostConfig.production

    if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
        throw new Error(`GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`) // eslint-disable-line
    }
}

if (process.env.NODE_ENV === `production` && config.siteUrl === `http://liamfallen.com` && !process.env.SITEURL) {
    throw new Error(`siteUrl can't be localhost and needs to be configured in siteConfig. Check the README.`) // eslint-disable-line
}



/**
* This is the place where you can tell Gatsby which plugins to use
* and set them up the way you want.
*
* Further info 👉🏼 https://www.gatsbyjs.org/docs/gatsby-config/
*
*/
module.exports = {
    siteMetadata: {
        siteUrl: process.env.SITEURL || config.siteUrl,
        siteUrl: "https://liamfallen.com"
    },
    plugins: [
        /**
         *  Content Plugins
         */
         {
            resolve: `gatsby-plugin-offline`,
            options: {
            precachePages: [`/, /about/`, `author/liam/`, `/the-perfect-candidate/`, `/seo-is-bad-for-the-internet/`, `/the-most-pointless-seo-article-2021-edition/`, `/is-your-seo-feeding-you-spoofed-analytics/`, `/the-problem-with-awards-in-marketing/`],
            },
         },
         'gatsby-plugin-postcss',         
         {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                "G-9VXQC7HC6S", // Google Analytics / GA
              ],
              // This object gets passed directly to the gtag config command
              // This config will be shared across all trackingIds
              gtagConfig: {
                anonymize_ip: true,
                cookie_expires: 0,
              },
              // This object is used for configuration specific to this plugin
              pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: true,
              },
            },
          },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `pages`),
                name: `pages`,
            },
        },  
        // Setup for optimised images.
        // See https://www.gatsbyjs.org/packages/gatsby-image/
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `images`),
                name: `images`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-ghost`,
            options:
                process.env.NODE_ENV === `development`
                    ? ghostConfig.development
                    : ghostConfig.production,
        },

        {
            resolve: `gatsby-transformer-rehype`,
            options: {
                filter: node => (
                    node.internal.type === `GhostPost` ||
                    node.internal.type === `GhostPage`
                ),
                plugins: [
                    {
                        resolve: `gatsby-rehype-ghost-links`,
                    },
                    {
                        resolve: `gatsby-rehype-prismjs`,
                    },
                    {
                        resolve: `gatsby-rehype-inline-images`,
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-ghost-images`,
            options: {
                // An array of node types and image fields per node
                // Image fields must contain a valid absolute path to the image to be downloaded
                lookup: [
                    {
                        type: `GhostPost`,
                        imgTags: [`feature_image`],
                    },
                    {
                        type: `GhostPage`,
                        imgTags: [`feature_image`],
                    },
                    {
                        type: `GhostSettings`,
                        imgTags: [`cover_image`],
                    },
                ],
                // Additional condition to exclude nodes 
                // Takes precedence over lookup
                exclude: node => (
                    node.ghostId === undefined
                ),
                // Additional information messages useful for debugging
                verbose: true,
                // Option to disable the module (default: false)
                disable: false,
            },
        },
        /**
         *  Utility Plugins
         */
        {
            resolve: `gatsby-plugin-ghost-manifest`,
            options: {
                short_name: config.shortTitle,
                start_url: `/`,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: `minimal-ui`,
                icon: `static/${config.siteIcon}`,
                legacy: true,
                query: `
                {
                    allGhostSettings {
                        edges {
                            node {
                                title
                                description
                            }
                        }
                    }
                }
              `,
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                    allGhostSettings {
                        edges {
                            node {
                                title
                                description
                            }
                        }
                    }
                }
              `,
                feeds: [
                    generateRSSFeed(config),
                ],
            },
        },
        {
            resolve: `gatsby-plugin-advanced-sitemap`,
            options: {
                query: `
                {
                    allGhostPost {
                        edges {
                            node {
                                id
                                slug
                                updated_at
                                created_at
                                feature_image
                            }
                        }
                    }
                    allGhostPage {
                        edges {
                            node {
                                id
                                slug
                                updated_at
                                created_at
                                feature_image
                            }
                        }
                    }
                    allGhostTag {
                        edges {
                            node {
                                id
                                slug
                                feature_image
                            }
                        }
                    }
                    allGhostAuthor {
                        edges {
                            node {
                                id
                                slug
                                profile_image
                            }
                        }
                    }
                }`,
                mapping: {
                    allGhostPost: {
                        sitemap: `posts`,
                    },
                    allGhostTag: {
                        sitemap: `tags`,
                    },
                    allGhostAuthor: {
                        sitemap: `authors`,
                    },
                    allGhostPage: {
                        sitemap: `pages`,
                    },
                },
                exclude: [
                    `/dev-404-page`,
                    `/404`,
                    `/404.html`,
                    `/offline-plugin-app-shell-fallback`,
                ],
                createLinkInHead: true,
                addUncaughtPages: true,
            },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-force-trailing-slashes`,
        `gatsby-plugin-offline`,
    ],
}

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import config from '../../utils/siteConfig'

// Styles
import '../../styles/app.css'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null
    
    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">

                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <header className="site-head bg-gray-900 pattern" style={{ ...site.cover_image && { backgroundImage: `url()` } }}>
                        <div className="container">
                            <div className="site-mast">
                                <div className="site-mast-left">
                                    <Link to="/">
                                        {site.logo ?
                                            <img className="site-logo" src={site.logo} alt={site.title} />
                                            : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                        }
                                    </Link>
                                </div>
                                <div className="site-mast-right">
                                    { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                                    <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a>
                                </div>
                            </div>
                            { isHome ?
                                <div className="site-banner">
                                    <h1 className="site-banner-title">{site.title}</h1>
                                    <p className="site-banner-desc">{site.description}</p>
                                </div> :
                                null}
                            <nav className="site-nav">
                                <div className="site-nav-left">
                                    {/* The navigation items as setup in Ghost */}
                                    <Navigation data={site.navigation} navClass="site-nav-item font-bold text-white" />
                                </div>
                                <div className="site-nav-right">
                                    <Link className="bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6" to="/contact">Contact</Link>
                                </div>
                            </nav>
                        </div>
                    </header>

                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>

                </div>
                <div className="mx-auto container">
                <div className="w-full flex flex-col items-center justify-center py-12 px-4">
                    <div className="flex lg:flex-row flex-col items-center  justify-between pt-16 border-brands lg:w-11/12 xl:w-9/12 f-f-l">
                        <div className="flex lg:flex-row flex-col items-center  justify-between w-full">
                            <div className="pb-8 lg:pb-0 md:object-scale-down w-full">
                                <img src="https://res.cloudinary.com/hhck1gh1f/image/upload/c_fit,h_47,w_143/v1619170165/ghost-blog-images/Monday.com-Logo.wine_u1r02w.webp" />
                            </div>
                            <div className="pb-8 lg:pb-0 md:object-scale-down w-full">
                            <img src="https://res.cloudinary.com/hhck1gh1f/image/upload/c_fit,h_47,w_143/v1619169262/ghost-blog-images/download_qbsoxp.webp" />
                            </div>
                            <div className="pb-8 lg:pb-0 md:object-scale-down w-full">
                            <img src="https://res.cloudinary.com/hhck1gh1f/image/upload/c_fit,h_47,w_143/v1619169103/ghost-blog-images/leovegas-mobile-gaming-group1_uvuk3q.webp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}
                    <footer className="site-foot bg-gray-900 pattern">
                        <div className="site-foot-nav container">
                            
                            <div className="site-foot-nav-left">
                                <Link to="/">LiamFallen.com</Link> © 2021 &nbsp;
                            </div>
                            <div className="site-foot-nav-right">
                        {/*}  <Navigation data={site.navigation} navClass="site-foot-nav-item" /> */}
                                <Link to="/privacy-policy/">Privacy Policy</Link> &nbsp;
                                <Link to="/terms-and-conditions/">Terms</Link> &nbsp;
                            </div>
                        </div>
                    </footer>

                </div>
            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery

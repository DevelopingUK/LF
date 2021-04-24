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
                <div class="container">
                <div class="bg-white dark:bg-gray-800 w-full rounded-lg p-4 mb-6 shadow sm:inline-block">
    <div class="flex items-start text-left">
        <div class="flex-shrink-0">
            <div class="inline-block relative">
                <a href="#" class="block relative">
                    <img alt="profil" src="https://res.cloudinary.com/hhck1gh1f/image/upload/v1619282808/ghost-blog-images/sune_p9du7v.webp" class="mx-auto object-cover rounded-full h-16 w-16 "/>
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1">
                    <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z">
                    </path>
                </svg>
            </div>
        </div>
        <div class="ml-6">
            <p class="flex items-baseline">
                <span class="text-gray-600 dark:text-gray-200 font-bold">
                    Sune Nightingale
                </span>
            </p>
            <div class="flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                    </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                    </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                    </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                    </path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                    <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                    </path>
                </svg>
            </div>
            <div class="mt-3">
                <p class="mt-1 dark:text-white">
                Liam brings a set of expert eyes to a project, he's someone who will hold you to account, push for higher evidence-based standards, lay out strategies that cover SEO, user experience, marketing strategies, site optimisations and more. He also has your long term interests in mind - he leaves you in a better position having passed on increased understanding, and helping you lay out a clear plan for continual improvement into the future.

As well as all of that he's also a very pleasant person to work with, so it's not hard to highly recommend Liam.                </p>
            </div>
        </div>
    </div>
</div>
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

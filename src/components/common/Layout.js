import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import CookieConsent from "react-cookie-consent";
import { useState } from "react";

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
    const [change, setChange] = useState(false);

    
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

<div>
            <div className="container mx-auto pt-16">
                <h1 className="text-gray-800 font-extrabold xl:text-5xl text-3xl mb-4 text-center md:text-center lg:text-center">What my clients say</h1>
            </div>
            <div className="w-full bg-gray-100 py-16">
                <div className="container relative mx-auto">
                    <div className="absolute -mt-16 top-0">
                        <svg width={151} height={104} xmlns="http://www.w3.org/2000/svg">
                            <g fill="#667EEA" fillRule="evenodd">
                                <rect x=".88" width={3} height={3} rx="1.5" />
                                <rect x="17.88" width={3} height={3} rx="1.5" />
                                <rect x="32.88" width={3} height={3} rx="1.5" />
                                <rect x="49.88" width={3} height={3} rx="1.5" />
                                <rect x="65.88" width={3} height={3} rx="1.5" />
                                <rect x="82.88" width={3} height={3} rx="1.5" />
                                <rect x="98.88" width={3} height={3} rx="1.5" />
                                <rect x="115.88" width={3} height={3} rx="1.5" />
                                <rect x="131.88" width={3} height={3} rx="1.5" />
                                <rect x="147.88" width={3} height={3} rx="1.5" />
                                <rect x=".88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x=".88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x=".88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x=".88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x=".88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x=".88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x=".88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x=".88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={101} width={3} height={3} rx="1.5" />
                            </g>
                        </svg>
                    </div>
                    <div className="absolute -mb-16 bottom-0 right-0">
                        <svg width={151} height={104} xmlns="http://www.w3.org/2000/svg">
                            <g fill="#667EEA" fillRule="evenodd">
                                <rect x=".88" width={3} height={3} rx="1.5" />
                                <rect x="17.88" width={3} height={3} rx="1.5" />
                                <rect x="32.88" width={3} height={3} rx="1.5" />
                                <rect x="49.88" width={3} height={3} rx="1.5" />
                                <rect x="65.88" width={3} height={3} rx="1.5" />
                                <rect x="82.88" width={3} height={3} rx="1.5" />
                                <rect x="98.88" width={3} height={3} rx="1.5" />
                                <rect x="115.88" width={3} height={3} rx="1.5" />
                                <rect x="131.88" width={3} height={3} rx="1.5" />
                                <rect x="147.88" width={3} height={3} rx="1.5" />
                                <rect x=".88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={13} width={3} height={3} rx="1.5" />
                                <rect x=".88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={25} width={3} height={3} rx="1.5" />
                                <rect x=".88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={38} width={3} height={3} rx="1.5" />
                                <rect x=".88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={51} width={3} height={3} rx="1.5" />
                                <rect x=".88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={63} width={3} height={3} rx="1.5" />
                                <rect x=".88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={76} width={3} height={3} rx="1.5" />
                                <rect x=".88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={89} width={3} height={3} rx="1.5" />
                                <rect x=".88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="17.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="32.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="49.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="65.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="82.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="98.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="115.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="131.88" y={101} width={3} height={3} rx="1.5" />
                                <rect x="147.88" y={101} width={3} height={3} rx="1.5" />
                            </g>
                        </svg>
                    </div>
                    <section id="carousel">
                        <figure className={change ? "hidden" : "block"}>
                            <div className="w-11/12 mx-auto bg-white py-10 sm:px-16 px-10 relative">
                                <div className="flex items-center justify-between pb-8">
                                    <div className="xl:flex md:flex lg:flex sm:flex items-center">
                                        <div className="h-20 w-20">
                                            <img src="https://res.cloudinary.com/hhck1gh1f/image/upload/v1619282808/ghost-blog-images/sune_p9du7v.webp" alt className="rounded-full object-cover h-full w-full shadow" />
                                        </div>
                                        <div className="xl:pl-6 lg:pl-6 md:pl-6 sm:pl-6 sm:pt-0 pt-4">
                                            <p className="text-xl text-gray-600 font-bold">Sune Nightingale</p>
                                            <p className="sm:text-xl text-sm text-gray-600">Director, StovesOnline.co.uk</p>
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
                                        </div>
                                    </div>
                                    <svg width={85} height={65} xmlns="http://www.w3.org/2000/svg">
                                        <text transform="rotate(-180 475.5 56.5)" fill="#EDF2F7" fillRule="evenodd" fontFamily="ProximaNova-Extrabld, Proxima Nova" fontSize={200} fontWeight={600} letterSpacing="1.667">
                                            <tspan x={860} y={184}>
                                                “
                                            </tspan>
                                        </text>
                                    </svg>
                                </div>
                                <p className="text-base text-gray-600 pb-6 w-full sm:w-10/12">Liam brings a set of expert eyes to a project, he's someone who will hold you to account, push for higher evidence-based standards, lay out strategies that cover SEO, user experience, marketing strategies, site optimisations and more. He also has your long term interests in mind - he leaves you in a better position having passed on increased understanding, and helping you lay out a clear plan for continual improvement into the future.</p>
                                <p className="text-base text-gray-600 w-full sm:w-10/12">As well as all of that he's also a very pleasant person to work with, so it's not hard to highly recommend Liam.</p>
                            </div>
                        </figure>
                    </section>
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
                        <CookieConsent
                        location="bottom"
                        buttonText="Okay!"
                        style={{ background: "#1E3A8A" }}
                        buttonStyle={{ color: "#ffffff", fontSize: "13px", background: "#2563EB" }}>
                        This website uses cookies.{" "}
                        </CookieConsent>
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

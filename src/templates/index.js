import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'
import { useState } from "react";


/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Index = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges
    const [change, setChange] = useState(false);

    return (
        <>
        
            <MetaData location={location} />
            
            <Layout isHome={true}>
            <Helmet>
                <title>Liam Fallen | Technical SEO Consultant</title>
                <meta name="description" content="Liam Fallen is a Technical SEO Consultant with a background in web development and marketing." />
            </Helmet>
                <div className="container">

                <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    <div>
      <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
        Technical SEO
      </p>
    </div>
    <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
      <span class="relative inline-block">
        <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
          <defs>
            <pattern id="b902cd03-49cc-4166-a0ae-4ca1c31cedba" x="0" y="0" width=".135" height=".30">
              <circle cx="1" cy="1" r=".7"></circle>
            </pattern>
          </defs>
          <rect fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)" width="52" height="24"></rect>
        </svg>
        <span class="relative">How Technical SEO works</span>
      </span>
    </h2>
    <p class="text-base text-gray-700 md:text-lg">
    </p>
  </div>
  <div class="grid gap-10 lg:grid-cols-4 sm:grid-cols-2">
    <div>
      <div class="flex items-center justify-between mb-6">
        <p class="text-2xl font-bold">Step 1</p>
        <svg class="w-6 text-gray-700 transform rotate-90 sm:rotate-0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
          <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
        </svg>
      </div>
      <p class="text-gray-600">
        It all starts with an audit to find where your website is failing.
      </p>
    </div>
    <div>
      <div class="flex items-center justify-between mb-6">
        <p class="text-2xl font-bold">Step 2</p>
        <svg class="w-6 text-gray-700 transform rotate-90 sm:rotate-0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
          <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
        </svg>
      </div>
      <p class="text-gray-600">
        Gather all of that audit data and analyse for solutions.
      </p>
    </div>
    <div>
      <div class="flex items-center justify-between mb-6">
        <p class="text-2xl font-bold">Step 3</p>
        <svg class="w-6 text-gray-700 transform rotate-90 sm:rotate-0" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
          <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
        </svg>
      </div>
      <p class="text-gray-600">
        Present recommendations based on the data collected.
      </p>
    </div>
    <div>
      <div class="flex items-center justify-between mb-6">
        <p class="text-2xl font-bold">Success</p>
        <svg class="w-8 text-gray-600" stroke="currentColor" viewBox="0 0 24 24">
          <polyline fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6,12 10,16 18,8"></polyline>
        </svg>
      </div>
      <p class="text-gray-600">
        Enjoy the success, your users will thank you for it too.
      </p>
    </div>
  </div>
</div>

                    <section className="post-feed">
                        {posts.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard key={node.id} post={node} />
                        ))}
                    </section>
                    <Pagination pageContext={pageContext} />
                </div>

                <section>
    <div class="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800">
        <div class="flex flex-wrap -mx-8">
            <div class="w-full lg:w-1/2 px-8">
                <div class="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                    <h2 class="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white">
                        If you care about user experience - hire me.
                    </h2>
                    <p class="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                        I'm a Technical SEO that does UX better than most UX professionals. I'm trusted by some of the best in the business including Monday.com, LeoVegas, SurferSEO and ItsNiceThat.
                    </p>
                    <div class="w-full md:w-1/3">
                    <a class="bg-blue-500 rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6" href="/contact">Hire me</a>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 px-8">
                <ul class="space-y-12">
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                                1
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white">
                                Be the best
                            </h3>
                            <p class="text-gray-500 dark:text-gray-300 leading-loose">
                            Be the best at what you do without having to worry about your website.
                            </p>
                        </div>
                    </li>
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                                2
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white">
                                Take control
                            </h3>
                            <p class="text-gray-500 dark:text-gray-300 leading-loose">
                            Take back control of your website's performance.
                            </p>
                        </div>
                    </li>
                    <li class="flex -mx-4">
                        <div class="px-4">
                            <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                                3
                            </span>
                        </div>
                        <div class="px-4">
                            <h3 class="my-4 text-xl font-semibold dark:text-white">
                            Improve
                            </h3>
                            <p class="text-gray-500 dark:text-gray-300 leading-loose">
                            I'll give you the tools you need to create a framework for continuous improvement.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          what is technical seo
        </p>
      </div>
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="70326c9b-4a0f-429b-9c76-792941e326d5" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)" width="52" height="24"></rect>
          </svg>
          <span class="relative">What is Technical SEO?</span>
        </span>
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
      </p>
    </div>
  </div>
  <div class="max-w-screen-xl sm:mx-auto">
    <div class="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
      <div class="space-y-8">
        <div>
          <p class="mb-4 text-xl font-medium">
          </p>
          <p class="text-gray-700">
          Technical SEO is all about making sure that your website follows best practices.
            <br />
            <br />
That includes how it looks, what pages are available, how fast it loads on mobile devices and other factors.
<br />
<br />
If you aren't following these guidelines to improve user experience, your business may not rank high on search engines, such as Google.

You must also understand how search engines crawl and index your site. 
<br />
<br />
This is a very complex process that takes years of experience to master.

Even then, it's difficult for SEOs (and their clients) to track the impact of changes made to improve performance. 
<br />
<br />
Technical SEO is a methodology for improving website performance by auditing and optimising websites from an engineering perspective.

Technical SEO is a part of the larger concept of search engine optimisation. 
<br />
<br />
What does this mean?
<br />
<br />
By having the technical side of your website optimised, you also improve user experience, enhancing your website's rankings in SERPs.

A website shouldn't just look good.
<br />
<br />
If it's visually pleasing and has excellent navigation for mobile devices but loads too slowly - that's a problem that needs to be solved.
<br />
<br />
The more complicated a website is from an engineering standpoint, the less likely Google will find and index its pages.
<br />
<br />
That's why you need to make sure your site loads as quickly as possible while still providing an excellent user experience on desktop and mobile devices alike.
<br />
<br />
Technical SEO isn't just about optimising your website for search engines; it's about optimising for your users too.
<br />
<br />
This is why it's important to consider technical SEO as a part of your overall online marketing strategy.
<br />
<br />
There's no point running ad campaigns to drive visitors to a landing page that's slow to load and forces users to leave before interacting with your content.          </p>
        </div>
      </div>
      <div class="space-y-8">
        <div>
          <p class="mb-4 text-xl font-medium"></p>
          <p class="text-gray-700">
          For Google and other search engines to find, index, and rank your site well in the SERPS - you need to be aware that they have their set criteria that must be met.
<br />
            <br />
Following technical SEO best practices and ensuring your website is easy to use and navigate may help your rankings.
<br />
<br />
If you're a business owner with a website, it's imperative that you don't ignore technical SEO best practices if you want to rank well for competitive keywords. 
<br />
<br />
That's why we need to make sure our websites are easy to use and navigate as possible by following Technical SEO best practices. 
<br />
<br />
Even though this can take time and resources - your users will thank you for it.
<br />
<br />
I have never audited a website and found nothing wrong with it. 
<br />
<br />
There's always something to improve when you're constantly changing things and adding new content. 

I think that's the reason I enjoy doing audits so much.
<br />
<br />
For example, if you're using a CMS like WordPress as a platform for your website, you might use plugins.

If you're using an SEO plugin to optimise your content for search engines, it'll be taking care of many things, but not everything. 
<br />
<br />
It might seem like technical SEO has nothing to do with your content strategy. 

However, you can have the best content in the world, but it's useless if it's never read because users leave before the page has loaded.
<br />
<br />
You may even have broken redirects or formatting issues; a widespread problem is a piece of content not being responsive across all devices - contributing to a bad user experience.
<br />
<br />
Also, most technical issues are below the surface, which is why most businesses don't think they need a technical SEO until it's too late.
<br />
<br />
Anyone can use popular tools to run audits, but it's essential to have an expert help you interpret that data and prioritise changes based on importance.

If you're relying on tools like SEMrush and Ahrefs to give you pointers, you could be missing even more significant problems that may not show up in these tools. 
<br />
<br />
These tools also forget to consider user experience; for example, I've seen websites with very high-performance scores but poor navigation and structure.

And if your website is slow, it could also be costing you money, causing potential customers to leave your website before purchasing your products or services.
<br />
<br />
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

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

            </Layout>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

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

    return (
        <>
        
            <MetaData location={location} />
            
            <Layout isHome={true}>
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

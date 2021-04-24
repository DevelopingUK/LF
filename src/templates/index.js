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

                    <section className="post-feed">
                        {posts.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <PostCard key={node.id} post={node} />
                        ))}
                    </section>
                    <Pagination pageContext={pageContext} />
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

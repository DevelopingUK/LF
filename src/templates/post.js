import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
    const post = data.ghostPost

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="container">
                    <article className="content">
                        { post.feature_image ?
                            <figure className="post-feature-image">
                                <img src={ post.feature_image } alt={ post.title } />
                            </figure> : null }
                        <section className="post-full-content">
                            <h1 className="content-title">{post.title}</h1>

                            {/* The main post content */ }
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                            <div class="py-16 bg-white">
  <div class="max-w-screen-md mx-auto">

    <div class="p-5">
      
      <div class="grid grid-cols-1 sm:grid-cols-12">
        <div class="sm:col-span-3 flex flex-col items-between">
          <img class="w-32 h-32 rounded-full sm:mr-10" src="https://res.cloudinary.com/hhck1gh1f/image/upload/ar_1:1,b_rgb:000000,bo_0px_solid_rgb:ffffff,c_fill,g_auto,r_max,w_1000/v1619097187/ghost-blog-images/srfdg_o.webp" alt="Avatar of Liam Fallen" />
          <div class="text-sm mt-5">
                <a href="https://liamfallen.com/" class="font-medium text-6xl leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out">Liam Fallen</a>
                <p class="text-3xl"></p>
              </div>
        </div>
        <div class="sm:col-span-9 text-left sm:flex flex-col justify-between py-3">
          
          <p class="mt-2 text-base leading-6 text-xl">
          Liam Fallen is a technical SEO consultant and has worked on some of the biggest websites in the world. He's been involved with Monday.com, LeoVegas Mobile Gaming Group, and SurferSEO, to name just a few. Liam enjoys cycling and has cycled over 5000km in the last 12 months. He also enjoys photography and is an official Getty Images contributor.                </p>
          
            </div>
      </div>
      
    </div>
    
  </div>
</div>


                        </section>
                    </article>
                </div>
            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`

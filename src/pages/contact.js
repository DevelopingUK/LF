import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

const Contact = () => {
  return (
      <Layout>
<div class="container md:flex md:justify-center mb-6">
    <h1>Contact</h1>
      </div>
<div class="mx-5 min-h-full place-content-center">
<div class="bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
  <h1 class="text-5xl mb-3 gray-900">Hi 👋</h1>
  <p class="text-xl">For a super speedy response contact me directly through LinkedIn.</p>
</div>
<div class="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
  <h2 class="font-semibold text-2xl mb-6">Start chatting</h2>
  <img class="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" src="https://res.cloudinary.com/hhck1gh1f/image/upload/ar_1:1,b_rgb:000000,bo_0px_solid_rgb:ffffff,c_fill,g_auto,r_max,w_1000/v1619097187/ghost-blog-images/srfdg_o.webp" alt="User avatar" />
  <p class="capitalize text-xl mt-1">Liam Fallen</p>
  <span class="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12"><div class="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>Active</span>
  <a href="https://www.linkedin.com/in/technical-seo/"><button class="rounded-md bg-gradient-to-r from-blue-400 to-blue-700 text-xl text-white pt-3 pb-4 px-8 inline">Send a message</button></a>
</div>
  </div>
    </Layout>
  )
}

export default Contact

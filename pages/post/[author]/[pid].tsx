import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
2

import { createClient } from 'contentful'
import config from '../../../config'
import { GetStaticPaths } from 'next/types'
// pre-render/static generation:
//TODO:fetch `posts`(by calling some API endpoit)
console.log(config.CONTENTFUL_ACCESS_TOKEN)
const client = createClient({
  space: 'd8xz5gmsv7vz',
  accessToken: config.CONTENTFUL_ACCESS_TOKEN!,
})

function Post({ posts }: { posts: any }) {
  const router = useRouter()
  const query = router.query
  console.log(query)
  console.log('posts', posts)
  return (
    // <ul>
    //   {posts.map(
    //     (post: {
    //       title:
    //         | string
    //         | number
    //         | boolean
    //         | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    //         | React.ReactFragment
    //         | React.ReactPortal
    //         | null
    //         | undefined
    //     }) => (
    //       <li>{post.title}</li>
    //     )
    //   )}
    // </ul>
    <div>Hi</div>
  )
}

export async function getStaticProps() {
  const posts = await client.getEntries().then((entries) => {
    entries.items.forEach((entry) => {
      console.log(entry.fields)
      return entry
    })
  })
  console.log('posts from getStaticProps', posts)
  return {
    props: { props: { posts } },
  }
}

export const getStaticPaths: GetStaticPaths<{ pid: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}

export default Post

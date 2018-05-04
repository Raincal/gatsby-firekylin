import React from 'react'
import { Helmet } from 'react-helmet'
import Post from '../components/Posts/Post'
import config from '../config'

const Links = ({ data: { markdownRemark } }) => {
  return (
    <div>
      <Helmet title={`友链 - ${config.title}`} />
      <Post post={markdownRemark} isHome={false} />
    </div>
  )
}

export default Links

export const pageQuery = graphql`
  query LinksQuery {
    markdownRemark(frontmatter: { path: { eq: "links" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

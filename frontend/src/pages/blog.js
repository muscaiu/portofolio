import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  console.log("blogs:", blogs)
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog page" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    __typename
    allStrapiBlogs {
      nodes {
        content
        category
        title
        slug
        desc
        date(formatString: " MMMM Do, YYYY")
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default Blog

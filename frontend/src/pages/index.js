import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
    </Layout>
  )
}

// const query = graphql`
//   {
//     allStrapiProjects(
//       filter: {
//         data: { elemMatch: { attributes: { featured: { eq: true } } } }
//       }
//     ) {
//       nodes {
//         data {
//           attributes {
//             description
//             github
//             title
//             url
//             featured
//           }
//         }
//       }
//     }
//   }
// `

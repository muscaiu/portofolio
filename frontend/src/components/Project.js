import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

const Project = () => {
  // const data = useStaticQuery(query)
  // console.log("data:", data)

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

  return <h2>project copmonent</h2>
}

Project.propTypes = {}

export default Project

import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import SEO from "../components/SEO"
import Image from "gatsby-image"

const About = ({ data }) => {
  const {
    allStrapiAbout: { nodes: about },
  } = data
  const { stack, title, image, info } = about[0]

  return (
    <Layout>
      <SEO title="About" description="about webdev" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => (
                <span key={item.id}>{item.name}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About

export const query = graphql`
  {
    __typename
    allStrapiAbout {
      nodes {
        stack {
          name
          id
        }
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        id
        info
      }
    }
  }
`

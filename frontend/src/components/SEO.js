import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    __typename
    site {
      siteMetadata {
        author
        siteUrl
        image
        siteTitle: title
        siteDesc: description
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const {
    site: {
      siteMetadata: {
        image,
        siteTitle,
        siteDesc,
        author,
        siteUrl,
        twitterUsername,
      },
    },
  } = useStaticQuery(query)

  return (
    <Helmet title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <meta name="author" content={author} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO

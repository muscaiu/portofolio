import React, { useState } from "react"
import Title from "./Title"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    __typename
    allStrapiJobs(filter: { featured: { eq: true } }) {
      nodes {
        company
        featured
        job_description {
          desc
        }
        position
        date
      }
    }
  }
`

const Jobs = () => {
  const [value, setValue] = useState(0)
  const {
    allStrapiJobs: { nodes },
  } = useStaticQuery(query)

  const { company, position, date, job_description } = nodes[value]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {nodes.map((item, index) => {
            return (
              <button
                key={index}
                className={`job-btn ${index === value && "active-btn"}`}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h3>{company}</h3>
          <p className="job-date">{date}</p>
          {job_description.map(({ desc }, index) => (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              {desc}
            </div>
          ))}
        </article>
      </div>
      <Link to="about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs

import React, { useState } from "react"
import Title from "./Title"
import { FaAlignRight, FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: id, order: ASC }) {
      nodes {
        data {
          id
          attributes {
            company
            date
            position
          }
        }
      }
    }
  }
`

const Jobs = () => {
  const [value, setValue] = useState(0)
  const {
    allStrapiJobs: { nodes },
  } = useStaticQuery(query)

  const { data } = nodes[0]
  const all = data.map(item => item.attributes)
  const { company, position, date } = all[value]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {all.map((item, index) => {
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
          {/* {desc.map((item, index) => (
            <div key={index} className="job-desc">
            </div>
          ))} */}
          <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
        </article>
      </div>
      <Link to="about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs

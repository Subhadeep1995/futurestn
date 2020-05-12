import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Base from '../components/base'
const Services = () => {
    const data = useStaticQuery(graphql`
    query AllServiceQuery{
        services:allContentfulService {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `)
    return (
        <div>
            <Base>
            <ul>
                {data.services.edges.map((edge) => {
                    return (
                    <li><Link to={`/services/${edge.node.slug}`}>{edge.node.title}</Link></li>
                    )
                })}
            </ul></Base>
        </div>
    )
}

export default Services

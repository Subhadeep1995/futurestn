import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Base from '../components/base'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import '../components/master.css'
import '../components/page.css'

export const data = graphql`
query ServiceQuery ($slug: String!) {
    service: contentfulService(slug: {eq: $slug}) {
      slug
      title
      body {
        json
      }
    }
  }
  
`

const Service = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
    }
    }
    return (
        <div>
            <Base>

            <div class="page-title-container">
                <div class="page-heading">
                    <h1>{props.data.service.title}</h1>
                </div>
            </div>
            
            <div class="page-body">
                <div class="container">
                    <p>{documentToReactComponents(props.data.service.body.json, options)}</p>
                </div>
            </div>           
                
            </Base>
        </div>
    )
}

export default Service
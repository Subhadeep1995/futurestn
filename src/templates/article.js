import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Base from '../components/base'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
// import Image from 'gatsby-image'
// import Head from '../components/head'

export const data = graphql`
query SingleArticle($url: String!) {
    article: contentfulArticle(url: {eq: $url}) {
      author
      category
      createdAt
      created
      title
      tags
      url
      body {
          json
      }
    }
  }
  
  
`

const Article = (props) => {
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
          <h1>{props.data.article.title}</h1>
          <div>{props.data.article.author}</div>
          <div>{documentToReactComponents(props.data.article.body.json, options)}</div>
        </div>
    )
}

export default Article
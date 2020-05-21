import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Base from '../components/base'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
// import Image from 'gatsby-image'
// import Head from '../components/head'
import '../components/master.css'
import '../components/page.css'

export const data = graphql`
query SingleArticle($url: String!) {
    article: contentfulArticle(url: {eq: $url}) {
      author
      category
      createdAt(formatString: "DD.MM.YYYY")
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
        
        <Base>
        <div class="article-title-container">
        <div class="article-heading">
            <h1>{props.data.article.title}</h1>
        </div>
    </div>
    <div class="article-info-container">
        <div class="article-info">
            <div class="container">
                <ul>
                    <li>Author: {props.data.article.author}</li>
                    <li>Tags: {props.data.article.tags}</li>
                    <li>Date: {props.data.article.createdAt}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="article-body">
        <div class="container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum doloremque unde, quae asperiores facilis in, vitae nihil repudiandae cupiditate iusto id accusamus aut nulla soluta, laudantium ad architecto qui.
        Deleniti inventore tempore nemo, dolor cum voluptatibus neque sed, ab cumque temporibus aspernatur nobis obcaecati doloribus sit eius repellendus assumenda. Nihil dolor blanditiis hic delectus sint, alias rerum excepturi voluptates.
        Debitis obcaecati unde quo nemo asperiores veritatis quis natus corrupti ipsum ullam, quod delectus nesciunt eligendi perferendis impedit quas voluptas aliquam sequi culpa quam suscipit odio nulla hic et. Sit.
        Voluptatibus eos dolores tempora sunt eligendi. Earum voluptates, officiis, velit minima hic nihil, aliquam beatae error nisi adipisci perferendis. Neque eos consequatur maxime quidem nostrum, cupiditate quod eligendi quaerat quibusdam!
        Cum vel veniam optio ipsum dignissimos voluptate quas eligendi animi nihil magnam sapiente similique sunt consequuntur, amet nobis, dolores assumenda nemo nam impedit itaque, iusto quis dicta odit debitis. Temporibus.</p>
        </div>
    </div>
        
        
      
        </Base>

        </div>
    )
}

export default Article
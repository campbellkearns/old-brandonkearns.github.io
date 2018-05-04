import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styled from "styled-components"

import Footer from "../components/Footer/Footer"
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Construction>
          <h3 style={{ backgroundColor: config.themeColor }}>brandonkearns.com is under construction</h3>
          <p>do return.</p>
          <p>more information on <a href="https://twitter.com/brandon_kearns">twitter</a>.</p>
          <p>thank you</p>
        </Construction>
        <header>
          <section>about</section>
          <section>contact</section>
        </header>
        <main>
          <section>I am Brandon Kearns</section>
          <section>
            <ul>
              <li>earn</li>
              <li>learn</li>
              <li>sojourn</li>
            </ul>
          </section>
          <Link to="/chia-seed">
            the chia seed
          </Link>
        </main>
        <Footer config={config} />
      </div>
    );
  }

}

const Construction = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  ${'' /* grid-template-rows: 1fr 1fr; */}
  align-items: center;
  justify-items: center;

  @media (min-width:768px) {
    font-size: 2em;
  }
`

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;

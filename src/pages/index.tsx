import * as React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { Media } from 'react-bootstrap';
import Layout from '../components/layout';

interface IndexProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          fields: {
            slug: string;
            date: string;
            title: string;
          };
          excerpt: string;
        };
      }>;
    };
  };
}

export default class IndexPage extends React.Component<IndexProps, {}> {
  public render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        {posts.map(post => (
          <Media className="mb-4">
            <Media.Body>
              <Link to={`/${post.node.fields.slug}/`}>
                <h1 className="display-4 text-body">
                  {post.node.fields.title}
                </h1>
              </Link>
              <h6>{post.node.fields.date}</h6>
              <Media>
                <Media.Body
                  dangerouslySetInnerHTML={{
                    __html: post.node.excerpt.replace(
                      `<h1>${post.node.fields.title}</h1>`,
                      ''
                    ),
                  }}
                />
              </Media>
            </Media.Body>
          </Media>
        ))}
      </Layout>
    );
  }
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: fields___date, order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
            title
          }
          excerpt(format: HTML)
        }
      }
    }
  }
`;

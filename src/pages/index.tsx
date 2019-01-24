import * as React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
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
        <ul>
          {posts.map(post => (
            <li key={post.node.fields.slug}>
              <span>{post.node.fields.date}</span>
              &nbsp;
              <Link to={`/${post.node.fields.slug}/`}>
                {post.node.fields.title}
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          fields {
            slug
            date
            title
          }
        }
      }
    }
  }
`;

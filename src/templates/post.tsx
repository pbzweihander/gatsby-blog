import { graphql, Link } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as rehypeReact from 'rehype-react';
import Layout from '../components/layout';

interface TemplateProps {
  data: {
    markdownRemark: {
      htmlAst: object;
      fields: {
        title: string;
        date: string;
      };
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export default (props: TemplateProps) => {
  const site = props.data.site;
  const post = props.data.markdownRemark;

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      h1: (innerProps: any) => (
        <div>
          <h1 className="display-4">{innerProps.children}</h1>
          <h5 className="text-right mb-2">{post.fields.date}</h5>
        </div>
      ),
      h2: (innerProps: any) => <h2 className="mb-3">{innerProps.children}</h2>,
      blockquote: (innerProps: any) => (
        <blockquote className="border-left border-info rounded bg-light pt-3 pl-3 pr-3 pb-1 w-75">
          {innerProps.children}
        </blockquote>
      ),
    },
  }).Compiler;

  return (
    <Layout>
      <Helmet>
        <title>
          {post.fields.title} - {site.siteMetadata.title}
        </title>
      </Helmet>
      <Link
        to="/"
        className="h6 text-body"
        style={{ position: 'absolute', top: '5rem' }}
      >
        ← Back
      </Link>
      {renderAst(post.htmlAst)}
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        title
        date
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

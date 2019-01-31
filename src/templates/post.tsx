import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

interface TemplateProps {
  data: {
    markdownRemark: {
      html: string;
      fields: {
        title: string;
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
  return (
    <Layout>
      <Helmet>
        <title>
          {post.fields.title} - {site.siteMetadata.title}
        </title>
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

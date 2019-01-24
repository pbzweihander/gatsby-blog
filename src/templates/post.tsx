import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';

interface TemplateProps {
  data: {
    markdownRemark: {
      html: string;
    };
  };
}

export default (props: TemplateProps) => {
  const post = props.data.markdownRemark;
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;

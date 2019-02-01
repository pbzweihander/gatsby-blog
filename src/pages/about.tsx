import * as React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

export default () => {
  const innerRender = (data: { site: { siteMetadata: { title: string } } }) => (
    <Layout>
      <Helmet>
        <title>About - {data.site.siteMetadata.title}</title>
      </Helmet>
      <Link
        to="/"
        className="h6 text-body"
        style={{ position: 'absolute', top: '5rem' }}
      >
        ← Back
      </Link>
      <h1 className="display-4">About</h1>
      <h3>@pbzweihander</h3>
      <p className="lead mt-5">About Page WIP...</p>
    </Layout>
  );

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={innerRender}
    />
  );
};

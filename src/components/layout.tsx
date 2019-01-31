import * as React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export default class Layout extends React.Component {
  render() {
    const innerRender = (data: {
      site: { siteMetadata: { title: string } };
    }) => (
      <div>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        <h2>{data.site.siteMetadata.title}</h2>
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/about/">About</Link>
        <div>{this.props.children}</div>
      </div>
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
  }
}

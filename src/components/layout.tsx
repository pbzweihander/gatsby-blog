import * as React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

export default class Layout extends React.Component {
  render() {
    const innerRender = (data: {
      site: { siteMetadata: { title: string } };
    }) => (
      <div>
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

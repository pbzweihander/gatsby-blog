import * as React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class Layout extends React.Component {
  render() {
    const innerRender = (data: {
      site: { siteMetadata: { title: string } };
    }) => (
      <div>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        <Navbar bg="light" expand="lg" className="mb-5">
          <Navbar.Brand>{data.site.siteMetadata.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about/" className="nav-link">
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container className="mb-5 pb-5">{this.props.children}</Container>
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

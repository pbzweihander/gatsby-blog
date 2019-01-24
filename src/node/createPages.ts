import { resolve, relative } from 'path';
import { GatsbyNode, CreatePagesArgs } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async (
  args: CreatePagesArgs
) => {
  const { graphql, actions, getNode } = args;
  const { createNodeField, createPage } = actions;

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            headings(depth: h1) {
              value
            }
          }
        }
      }
    }
  `);

  allMarkdown.data.allMarkdownRemark.edges.forEach(
    (edge: {
      node: {
        id: string;
        fields: {
          slug: string;
        };
        headings: Array<{
          value: string;
        }>;
      };
    }) => {
      const title = edge.node.headings[0].value;
      const slug = edge.node.fields.slug;

      createNodeField({
        node: getNode(edge.node.id),
        name: 'title',
        value: title,
      });
      createPage({
        component: resolve(__dirname, '../templates/post.tsx'),
        context: {
          slug,
        },
        path: slug,
      });
    }
  );
};

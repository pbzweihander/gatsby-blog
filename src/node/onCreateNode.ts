import { GatsbyNode, CreateNodeArgs } from 'gatsby';

const FRONTMATTER_REGEX = /^(\d{4}-\d{2}-\d{2})-/;

export const onCreateNode: GatsbyNode['onCreateNode'] = async (
  args: CreateNodeArgs
) => {
  const { node, getNode, actions } = args;
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const { relativeDirectory } = getNode(node.parent);
    const captureGroups = FRONTMATTER_REGEX.exec(relativeDirectory);
    if (!captureGroups) {
      return;
    }
    const date = captureGroups[1];

    createNodeField({
      node,
      name: 'date',
      value: date,
    });
    createNodeField({
      node,
      name: 'slug',
      value: relativeDirectory,
    });
  }
};

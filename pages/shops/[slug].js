import { GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ck9ebi5s101jf01xjdfbi2vrj/master'
);

export async function getStaticProps({ params }) {
  const { shop } = await graphcms.request(
    `
    query ShopPageQuery($slug: String!) {
      shop(where: { slug: $slug }) {
        name
        description
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return { props: { shop } };
}

export async function getStaticPaths() {
  const { shops } = await graphcms.request(`
    {
      shops {
        slug
        name
      }
    }
  `);

  return {
    paths: shops.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default ({ shop }) => (
  <React.Fragment>
    <h1>{shop.name}</h1>
    <p>{shop.description}</p>
  </React.Fragment>
);

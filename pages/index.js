import Link from "next/link";
import Layout from "../components/Layout";
import SiteContainer from "../components/SiteContainer";
import { GraphQLClient } from 'graphql-request';
import ShopItem from "../components/ShopItem";

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-eu-central-1.graphcms.com/v2/ck9ebi5s101jf01xjdfbi2vrj/master'
  );

  const { shops } = await graphcms.request(
    `
      { 
        shops {
          slug
          city
          address
          name
          delivery
          personalPickup
        }
      }
    `
  );

  return {
    props: {
      shops,
    },
  };
}
export default function Home({shops}) {
  return (
    <Layout>
      <SiteContainer>
        {
          shops.map(({ slug, name, city, address, personalPickup, delivery }) =>
              <ShopItem
                slug={slug}
                city={city}
                name={name}
                address={address}
                delivery={delivery}
                personalPickup={personalPickup}
              />
          )
        }
      </SiteContainer>
      <style jsx>{`
        form {
          border-bottom: 1px solid #ececec;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 20px;
        }
        input {
          display: block;
          margin-bottom: 10px;
        }
      `}</style>
    </Layout>
  )
}

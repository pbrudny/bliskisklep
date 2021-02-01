import Head from "next/head";

export default function Layout({ children }) {
  return <div>
    <Head>
      <title>Bliski Sklep</title>
      <script src="https://kit.fontawesome.com/47f555217d.js" crossOrigin="anonymous"></script>
      <meta property="og:title" content="Bliski Sklep" key="title" />
    </Head>
    {children}
  </div>
}

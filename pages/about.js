import Head from 'next/head'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          About
        </h1>
      </main>

      <footer>
        <a
          href="http://sha.pl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}SHA Creative
        </a>
      </footer>
    </div>
  )
}

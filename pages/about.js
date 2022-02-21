import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
      </Head>

      <main>
        <p>About Main</p>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </main>

      <footer>
        <p>About Footer</p>
      </footer>

    </div>
  )
}

import Head from 'next/head'
import Link from 'next/link'

export default function Admin() {
  return (
    <div className="container">
      <Head>
        <title>Admin Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Admin Page</h1>
        <hr/>
        <ul>
          <li>
            <Link href="/">
              <a>Go back Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </main>

      <footer>
        <hr/>
      </footer>

    </div>
  )
}

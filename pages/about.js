import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>About</h1>
        <hr/>
        <ul>
          <li>
            <Link href="/">
              <a>Go back Home</a>
            </Link>
          </li>
          <li>
            <Link href="/admin">
              <a>Admin</a>
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

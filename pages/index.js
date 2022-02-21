import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hello World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Main</p>
        Read{' '}
        <Link href="/about">
          <a>About Page!</a>
        </Link>
      </main>

      <footer>
        <p>Footer</p>
      </footer>

    </div>
  )
}

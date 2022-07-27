import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>yalla shoot live</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Yalla Shoot Live" />
        <p className="description">
         The first site to watch Arab and international matches and follow foreign leagues (English, Spanish, Italian and German)
And also follow the Egyptian, Saudi and Moroccan league.
<br>
  <a href="https://uhd.live-yalla-shoot.com/">yalla shoot live</a>

        </p>
      </main>

      <Footer>
  <p className="description">
    By Moka Templates
    </p>
  </Footer>
    </div>
  )
}

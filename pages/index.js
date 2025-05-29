import Head from "next/head";
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Services from '../components/Services'
import Marquee from '../components/Marquee'
import Portfolio from '../components/Portfolio'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import Awards from '../components/Awards'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hubfolio - Startup Agency</title>
        <meta name="description" content="Hubfolio - Multi-Purpose HTML5 Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/imgs/favicon.ico" />
      </Head>

      <Layout>
        <Navbar />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <Header />
              <Services />
              <Marquee />
              <Portfolio />
              <Clients />
              <Testimonials />
              <Awards />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </Layout>
    </>
  );
}

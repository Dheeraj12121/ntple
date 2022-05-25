import type { NextPage } from 'next'
import Head from 'next/head'
import Navbarr from '../components/Navbarr'
import Smallbox from '../components/Smallbox'
import Secondcards from '../components/Secondcards'
import Fistcards from '../components/Fistcards'
import Footer from '../components/Footer'
import Thirdcards from '../components/Thirdcards'
import Header from '../components/Header';
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Home :: NTPLE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbarr />

      <Smallbox />

      <Header/>

      <Fistcards/>

      <Secondcards />

      <Thirdcards />

      <Footer/>
    </div>
  )
}

export default Home

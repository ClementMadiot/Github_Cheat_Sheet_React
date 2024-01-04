import React from 'react'
import Header from '../components/Header'
import LocalVersion from '../components/LocalVersion'
import ManageCommit from '../components/ManageCommit'
import OnlineVersion from '../components/OnlineVersion'

const Home = () => {
  return (
    <main>
      <section>
        <Header />
        <LocalVersion />
        <ManageCommit />
        <OnlineVersion />
      </section>
      <section></section>
    </main>
  )
}

export default Home

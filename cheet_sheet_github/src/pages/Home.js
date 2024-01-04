import React from 'react'
import Header from '../components/Header'
import LocalVersion from '../components/LocalVersion'
import ManageCommit from '../components/ManageCommit'
import OnlineVersion from '../components/OnlineVersion'
import GitBash from '../components/GitBash'
import GitConfig from '../components/GitConfig'
import GitStatus from '../components/GitStatus'
import CommitOwn from '../components/CommitOwn'


const Home = () => {
  return (
    <main>
      <section className='right-part'>
        <Header />
        <LocalVersion />
        <ManageCommit />
        <OnlineVersion />
      </section>
      <section className='left-part'>
        <GitBash/>
        <GitConfig/>
        <GitStatus/>
        <CommitOwn/>
      </section>
    </main>
  )
}

export default Home

import React from 'react'
import Header from '../components/Header'
import GitPull from '../components/TeamWorkPart/GitPull'
import Gitignore from '../components/TeamWorkPart/Gitignore'

const TeamWork = () => {
  return (
    <main>
      <GitPull />
      <Gitignore />
    </main>
  )
}

export default TeamWork

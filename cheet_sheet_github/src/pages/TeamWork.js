import React from 'react';
import Header from '../components/Header';
import GitPull from '../components/GitPull';

const TeamWork = () => {
  return (
    <main>
      <section className='right-part'>
        <Header/>
        <GitPull/>
      </section>
      <section className='left-part'></section>
    </main>
  );
};

export default TeamWork;
import React from 'react';
import Header from '../components/Header';
import GitPull from '../components/TeamWorkPart/GitPull';
import TitleBox from '../components/TitleBox';

const TeamWork = () => {
  return (
    <main>
      <section className='right-part'>
        <Header/>
        <GitPull/>
        <TitleBox/>
      </section>
      <section className='left-part'></section>
    </main>
  );
};

export default TeamWork;
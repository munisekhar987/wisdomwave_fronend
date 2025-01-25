import Banner from '@/components/Banner'
import HeaderBox from '@/components/HeaderBox'
import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/button'

import React from 'react'

const Home = () => {
  const loggedIn = {firstName: "Muni"}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Banner />
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Learner'}
            subtext="Unlock your potential and enhance your skills with personalized, expert-led learning at WisdomWave."
          />
        </header>
      </div>
    </section>
  )
}

export default Home
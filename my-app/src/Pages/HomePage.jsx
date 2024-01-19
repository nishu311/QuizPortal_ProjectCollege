import React from 'react'

import Header from "../componants/Layout/Header";
import Hero from "../componants/Route/Hero/Hero";


const HomePage = () => {
  
  return (
    
    <div>
        <Header activeHeading={1} />
        <Hero/>
        

    </div>
  )
}

export default HomePage;
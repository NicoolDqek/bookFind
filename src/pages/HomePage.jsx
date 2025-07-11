import React from 'react'
import Header from '../layout/Header'
import BookSection from '../layout/bookSection'
import GenderSection from '../layout/GenderSection'
import Navbar from '../components/Navbar'
import Banner from '../layout/Banner'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <GenderSection/>
      <Banner/>
      <BookSection/>
      <Footer/>

    </div>
  )
}

export default HomePage

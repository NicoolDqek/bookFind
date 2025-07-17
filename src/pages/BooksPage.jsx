import React from 'react'
import BookDetails from '../components/BookDetails'
import Navbar from '../components/Navbar'
import Header from '../layout/Header'
import BookCardAll from '../components/BookCardAll'
import Footer from '../components/Footer'
function BooksPage() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <BookCardAll/>
      <Footer/>
    </div>
  )
}

export default BooksPage


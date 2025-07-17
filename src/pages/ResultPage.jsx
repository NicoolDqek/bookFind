import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ContextGlobal } from '../api/context/GlobalContext'
import BookCard from '../components/BookCard'
function ResultPage() {
  const {result}=useContext(ContextGlobal)
  
  return (
    <div>
      <Navbar/>
      <div className='container section_books'>
         <div className='row'>

      {result.length > 0 ? (result.map((item, index) => (
        <div  className='col-lg-3 col-md-3 col-sm-6' key={index}>
          <BookCard book={item}/>
        </div>
      ))):
      (<div>
        <p>libros no disponibles</p>
      </div>

      )}
    </div>
         </div>

       
      <Footer/>
    </div>
  )
}

export default ResultPage

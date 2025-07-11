import React, { useContext } from 'react'
import BookCard from '../components/BookCard'
import { ContextGlobal } from '../api/context/GlobalContext'

function BookSection() {

 const {BookSection}=useContext(ContextGlobal)
  return (
    <div  className='section_books container-fluid'>
         <h1>Books ShowCase</h1>
          <div className="row ">
          {BookSection.slice(6,12).map(b=>(
               <BookCard book={b}/>    
          ))}  
          

        </div>
      
    </div>
  )
}

export default BookSection

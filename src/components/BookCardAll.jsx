import React, { useEffect, useState } from 'react'
import { getGender } from '../api/controllers/CallFunctions'
import BookCard from './BookCard'

function BookCardAll() {


  const [romance,setRomance]=useState([])
  const [terror,setTerror]=useState([])
   const [juvenil,setJuvenil]=useState([])
    const [biologia,setBiologia]=useState([])
     const [historia,setHistoria]=useState([])


     useEffect(() => {
     getGender("romance")
     .then(data=>setRomance(data))
     .catch(err => console.error("error al cargar data",err))
     }, [])

    

        useEffect(() => {
     getGender("terror")
     .then(data=>setTerror(data))
     .catch(err => console.error("error al cargar data",err))
     }, [])

        useEffect(() => {
     getGender("juvenil")
     .then(data=>setJuvenil(data))
     .catch(err => console.error("error al cargar data",err))
     }, [])

        useEffect(() => {
     getGender("biologia")
     .then(data=>setBiologia(data))
     .catch(err => console.error("error al cargar data",err))
     }, [])

        useEffect(() => {
     getGender("historia")
     .then(data=>{setHistoria(data)
      console.log("libros:",data)
     })
     .catch(err => console.error("error al cargar data",err))
     }, [])
  return (
    <div>
       <div className='d-flex align-items-center
justify-content-center
 flex-column section_books conteiner '>
        <div className='row'>
          <h1>{romance.name}</h1>

          {romance.works?.map((book,index)=>(
            <div  className='col-lg-3 col-md-3 col-sm-6' key={index}>
              <BookCard book={book}/>
            </div>
          ))}
        </div>

         <div className='row'>
          <h1>{terror.name}</h1>

          {terror.works?.map((book,index)=>(
            <div className='col-lg-3 col-md-3 col-sm-6 '  key={index}>
             <BookCard book={book}/>
            </div>
          ))}
        </div>

         <div className='row'>
          <h1>{biologia.name}</h1>

          {biologia.works?.map((book,index)=>(
            <div className='col-lg-3 col-md-3 col-sm-6' key={index}>
              <BookCard book={book}/>
            </div>
          ))}
        </div>

         <div className='row'>
          <h1>{juvenil.name}</h1>

          {juvenil.works?.map((book,index)=>(
            <div className='col-lg-3 col-md-3 col-sm-6'  key={index}>
              <BookCard book={book}/>
            </div>
          ))}
        </div>

         <div className='row'>
          <h1>{historia.name}</h1>

          {historia.works?.map((book,index)=>(
            <div className='col-lg-3 col-md-3 col-sm-6'  key={index}>
              <BookCard book={book}/>
            </div>
          ))}
        </div>
       </div>
    </div>
  )
}

export default BookCardAll

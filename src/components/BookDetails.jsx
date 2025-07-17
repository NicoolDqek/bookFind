import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getInfo, relateBooks} from '../api/controllers/CallFunctions'

 
function BookDetails() {
const [book,setBook]=useState(null)
const {id}=useParams()
const [imgActual,setImgActual]=useState(0)
const [relate,setRelate]=useState(null)



useEffect(() => {
getInfo(id)
.then(data => setBook(data))
      .catch(err => console.error(err));
}, [id])

useEffect(() => {
    const authorKey = book?.authors?.[0]?.author?.key;
  if (!authorKey) return;

  
      const authorId = authorKey.split('/').pop();
  console.log("Author ID:", authorId);
    relateBooks(authorId)
    
      .then(data =>{
        console.log('Libros relacionados:', data);  
        setRelate(data);
      })
      .catch(err => console.error(err));
       
  
}, [book]); 



const validCovers = book?.covers?.filter(id => id > 0) || [];


const antes=()=>{
    if (imgActual>0){
        setImgActual(imgActual-1) 
    }
}
const siguiente = () => {
  if (imgActual < validCovers.length - 1) {
    setImgActual(imgActual + 1);
  }
}


if (!book) return <p>Cargando....</p>




  return (
    <div>
        <Link to={'/'}><i class="bi bi-house">Home</i></Link>
    
     <div className="conteiner-fluid">
   
  <div className="bookDetails row">
    <div className="col-lg-4"> 
        
    
{validCovers.length > 0 && (

    <div className='img-g'>
        <div>
            <img className='img-carrusel' src={`https://covers.openlibrary.org/b/id/${validCovers[imgActual]}-M.jpg`} alt="" />
        </div>
        <div className='boton-g'>

<button className='b-galeia'  onClick={siguiente}><i className="bi bi-arrow-left-circle-fill"></i></button>
<button className='b-galeia' onClick={antes}><i className="bi bi-arrow-right-circle-fill"></i></button>

        </div>
    </div>
)}
        

    </div>
    <div className="col-lg-8 info">
     <h2>{book.title}</h2>
     <h5>{book.authorName }</h5>
     <h6><b>Publish Date:</b> {book.first_publish_date}</h6>
     
    </div>
     
  </div>
   
</div>   

<div className="conteiner about">
    <div className="row description">
        <div className="col-lg-3">
            <h6>About</h6>
<p>
  {typeof book.description === 'object'
    ? book.description.value
    : book.description}
</p>
        </div>
        <div className="col-lg-8">
         <div  className='section_books container-fluid'>
         <h1>Books Relates</h1>
          <div className="row">
         {relate ?(
  relate.filter(libro => libro.covers && libro.covers.length > 0)
  .map((libro, index) => (
  <div className='card-relate col-lg-3 col-sm-6 col-12'  key={index}>
   <Link to={`/books/${libro.key.split('/').pop()}`}>
<img src={`https://covers.openlibrary.org/b/id/${libro.covers?.[0]}-M.jpg`} /></Link> 
    <h5>{libro.title}</h5>
    <p><b>Autor:</b>{libro.authorName}</p>
    
  </div>
))):(
  <div className='d-flex align-items-center justify-content-center'>
    <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2x1bGMybGM2ZHVlbHF0Y2FmaXVkMHFvZ3pseWdoaDJrZm5lb3E3ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/2nciPKoj5DerEKmEq9/giphy.gif" alt="" style={{width:"100px",height:"100px"}} />
    <p style={{fontSize:'18px'}}>cargando....</p>
  </div>
)}
 </div>
    </div>
        </div>
    </div>
</div>
   
    </div>
  )
}

export default BookDetails

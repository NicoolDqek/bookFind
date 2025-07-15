
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { getInfo } from '../api/controllers/CallFunctions';



function BookCard({ book }) {

  const [bookDetail,setDetailedBook]=useState(null)
  const title = book.title;
  const author = book.authors?.[0]?.name || 'Autor desconocido';
  const coverId = book.cover_id;
  const imageUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : 'https://via.placeholder.com/150x200?text=No+Cover';
    
 
 const bookId = book.key.replace('/works/', '');

  useEffect(() => {
    
    getInfo(bookId) 
      .then(data => setDetailedBook(data))
      .catch(err => console.error(err));
  
}, [bookId]);
  return (

         <div  className="card col-lg-3 col-md-3 col-sm-6" >
       <Link to={`/books/${bookId}`}><img src={imageUrl} className="card-img-top" alt={title} /></Link>
      <div className=" card-b">
        <h5 className="titulo">{title}</h5>
        <p ><b> Story By: </b>{author}</p>
      </div>
    </div>
  );
}


export default BookCard

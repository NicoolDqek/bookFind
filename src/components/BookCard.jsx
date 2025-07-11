function BookCard({ book }) {
  const title = book.title;
  const author = book.authors?.[0]?.name || 'Autor desconocido';
  const coverId = book.cover_id;
  const imageUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : 'https://via.placeholder.com/150x200?text=No+Cover';

    const authorImg = author.photos?.[0]
  ? `https://covers.openlibrary.org/a/id/${author.photos[0]}-M.jpg`
  : 'https://via.placeholder.com/150x200?text=No+Image';

  return (

          <div className="card col-lg-3 col-md-3 col-sm-6" >
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className=" card-b">
        <h5 className="titulo">{title}</h5>
        <p ><b> Story By: </b>{author}</p>
      </div>
    </div>
  );
}


export default BookCard

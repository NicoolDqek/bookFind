import React from 'react'
import generos from '../data/Gender.json'
function GenderCard() {
  return (
    <div className="genders container-fluid">
        <h1>Genders</h1>
        <div className="row"> 
            
            {generos.map((genero) => (
            <div key={genero.nombre} className="col-lg-2 col-md-2 col-sm-4 gh">
              <img src={genero.imgUrl} alt={genero.nombre} className="h-40 w-full object-cover" />
              <div className='info-card'>
                <h3 className="text-lg font-semibold">{genero.nombre}</h3>
             
              </div>
            </div>
          ))}</div>
         
        </div>
  )
}

export default GenderCard

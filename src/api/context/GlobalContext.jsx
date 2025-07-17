import React, { createContext, useEffect, useState } from 'react';
import BookSection from '../../layout/bookSection';
import { getBooks, searchBar } from '../controllers/CallFunctions';
import { useNavigate } from 'react-router-dom';
export const ContextGlobal=createContext()
function GlobalContext({children}) {
const [BookSection,setBookSection]=useState([])
const [result,setResult]=useState([])
const [buscar,setBuscar]=useState('')
const navigate = useNavigate(); 

useEffect(() => {
  if (buscar && buscar.trim() !== "") {
    searchBar(buscar)
      .then((data) => {
        setResult(data || [])
       
      })
      
      .catch((err) => console.log('error en búsqueda: ', err));
  }
}, [buscar]);


const busqueda = (e) => {
  const valor = e.target.value;
  setBuscar(valor);

  if (valor.trim() !== "") {
    console.log(valor);
  } else {
    console.error("input vacío");
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();
    if (buscar.trim() !== "") {
      navigate(`/resultpage?query=${encodeURIComponent(buscar)}`);
    }
  };

useEffect(() => {
getBooks()
.then((data)=>setBookSection(data))
.catch(err=>console.error(err))
}, [])
  return (
    <ContextGlobal.Provider  value={{BookSection,result,busqueda,buscar,handleSubmit}} >
      {children}
    </ContextGlobal.Provider >
  )
}

export default GlobalContext

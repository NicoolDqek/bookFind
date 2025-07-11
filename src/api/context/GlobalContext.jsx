import React, { createContext, useEffect, useState } from 'react';
import BookSection from '../../layout/bookSection';
import { getBooks } from '../controllers/CallFunctions';
export const ContextGlobal=createContext()
function GlobalContext({children}) {
const [BookSection,setBookSection]=useState([])


useEffect(() => {
getBooks()
.then((data)=>setBookSection(data))
.catch(err=>console.error(err))
}, [])
  return (
    <ContextGlobal.Provider  value={{BookSection}} >
      {children}
    </ContextGlobal.Provider >
  )
}

export default GlobalContext

import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { searchBar } from '../api/controllers/CallFunctions'
import { ContextGlobal } from '../api/context/GlobalContext'

function Navbar() {
 const {busqueda,buscar,handleSubmit}=useContext(ContextGlobal)
  return (
    <nav className="navbar navbar-expand-lg bg-light p-2">
      <div className="container-fluid">
     
        <form onSubmit={handleSubmit} className="d-flex me-auto" role="search">
          <input
            className="form-control me-2"
            value={buscar}
            type="search"
            placeholder="Search..."
            aria-label="Search"
            onChange={(e)=>busqueda(e)}
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

       
        <button
          className="navbar-toggler ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links a la derecha */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/books">Books</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">BOOKFIND</Link>
            </li>
          
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

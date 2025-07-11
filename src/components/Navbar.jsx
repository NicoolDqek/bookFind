import React from 'react'

function Navbar() {
  return (
    <div>
   <nav class="p-2  navbar-expand-lg ">
  <div class="container-fluid navbar d-flex justify-content-between align-items-center">
    
     <div className='search'><form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search...." aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form></div>
    
    
    <div className='link-navbar'><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
 
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Books</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Autors</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Genders</a>
        </li>
         
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">List</a>
        </li>
      </ul>
    </div></div>
    

  </div>
</nav>

    </div>
  )
}

export default Navbar

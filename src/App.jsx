
 
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import BooksPage from './pages/BooksPage'
import AutorsPage from './pages/AutorsPage'
import GenderPage from './pages/GenderPage'
import InfoPage from './pages/InfoPage'
function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/books' element={<BooksPage/>}></Route>
      <Route path='/autors' element={<AutorsPage/>}></Route>
      <Route path='/genders' element={<GenderPage/>}></Route>
      <Route path='/books/:id' element={<InfoPage/>}></Route>
      
        </Routes>
    </>
  )
}

export default App

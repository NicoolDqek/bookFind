
 
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import BooksPage from './pages/BooksPage'
import AutorsPage from './pages/AutorsPage'
import GenderPage from './pages/GenderPage'
import InfoPage from './pages/InfoPage'
import ResultPage from './pages/ResultPage'
function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/books' element={<BooksPage/>}></Route>
      <Route path='/autors' element={<AutorsPage/>}></Route>
      <Route path='/genders' element={<GenderPage/>}></Route>
      <Route path='/books/:id' element={<InfoPage/>}></Route>
      <Route path="/resultpage" element={<ResultPage />} />

      
        </Routes>
    </>
  )
}

export default App

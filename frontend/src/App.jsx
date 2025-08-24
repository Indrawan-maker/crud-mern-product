import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
import AddUser from './components/AddUser'


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes> 
      <Route path="/" element={<ProductList />}/>
      <Route path="/add" element={<AddUser />}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

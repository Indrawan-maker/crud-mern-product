import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import Navbar from './components/Navbar'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes> 
      <Route path="/" element={<ProductList />}/>
      <Route path="/add" element={<AddUser />}/>
      <Route path="edit/:id" element={<EditUser />}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App

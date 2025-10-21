
import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  

  return (
    <>
        <BrowserRouter>
          <HeaderComponent/>
            <Routes>
              {/* // http://localhost:5173 */}
              <Route path='/' element = { <ListEmployeeComponent/>}></Route>
              {/* // http://localhost:5173/employees */}
              <Route path='/employees' element = { <ListEmployeeComponent/>}></Route>
              {/* // http://localhost:5173/add-employee */}
              <Route path='/add-employee' element = {<EmployeeComponent/>}></Route> 
            </Routes>
          <FooterComponent/>
        </BrowserRouter>
    
      
    </>
  )
    
}
export default App

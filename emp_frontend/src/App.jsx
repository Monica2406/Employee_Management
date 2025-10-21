
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'


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
          </Routes>
        <FooterComponent/>
         </BrowserRouter>
    
      
    </>
  )
    
}
export default App

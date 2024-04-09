
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from "./Components/Home";
import Contact from "./Components/Contact";


function App() {
  return(
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="/" element={<Home/>} />


    
       </Routes>


    </BrowserRouter>

  
  )

  
}
export default App;
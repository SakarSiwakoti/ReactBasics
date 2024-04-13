
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Nothing from "./Components/Nothing";




function App() {
  return(
    <BrowserRouter>
      
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/nothing" element={<Nothing/>} />
       
       </Routes>


    </BrowserRouter>

  
  )

  
}
export default App;

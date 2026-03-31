import LoginPage from "./pages/LoginPages"
import MCQPracticePage from "./pages/MCQPracticePage"
import Resources from "./pages/NotexaResourcesPage"
import LandingPage from "./pages/LandingPage"
import {Routes, Route ,BrowserRouter} from "react-router-dom"

function App(){
  return(
    
   <BrowserRouter>
   <Routes>
    <Route path="/"  element={<LandingPage></LandingPage>}/>
    <Route path="/login"  element={<LoginPage></LoginPage>}/>
    <Route path="/resources"  element={<Resources/>}/>
    <Route path="/mcq"  element={<MCQPracticePage></MCQPracticePage>}/>
   </Routes>
   </BrowserRouter>
  )
}
export default App
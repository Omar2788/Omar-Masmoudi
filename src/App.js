import About from "./components/about/About";
import Certificate from "./components/certification/Certificate";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/intro";
import ProjectList from "./components/ProjectList/ProjectList";
import {  
  BrowserRouter,  
    
}   
from 'react-router-dom';  
import Navbar from "./components/navbar/Navbar";
import Licence from "./components/ProjetLicence/Licence";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <ProjectList/>
      <Licence/>
      <Certificate/>
      <Contact/>
    </div>
    </BrowserRouter>
  );
}

export default App;

import NavBar  from "./components/NavBar";
import Home from "./components/home";
import About from "./components/about"
import Skills from "./components/skills";
import Work from "./components/work";
function App() {
  return (
    <div >
     <NavBar></NavBar>
     <Home/>
     <About/>
     <Skills/>
     <Work/>
    </div>
  );
}

export default App;

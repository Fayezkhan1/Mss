import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/navvbar";
import {Route,Routes} from "react-router-dom"
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<About/>}/>
      </Routes>
       */}
      
        <Navbar/>
        <Home/>
        <About/>
      
      
    </div>
    
  );
}

export default App;

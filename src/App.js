import "./App.css";
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import Orari from "./components/orari/Orari";
import Introhome from "./components/introHome/Introhome";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Introhome/>
        <Orari/>
        
    </div>
  );
}

export default App;

import "./App.css";
import 'animate.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Ilbar from "./pages/il-bar/Ilbar";
import Ilristorante from "./pages/il-ristorante/Ristorante";
import Menu from "./pages/il-menu/Menu";
import Contattaci from "./components/contattaci/Contattaci";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
} from "react-router-dom";
import Prenota from "./pages/prenota/Prenota";
import Halloween from "./components/halloween/Halloween";
import { useEffect } from "react";
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return null;
}


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Halloween/>
        <div className="routes">
          <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Ilbar />} path="/il-bar"></Route>
            <Route element={<Ilristorante />} path="/il-ristorante"></Route>
            <Route element={<Menu />} path="/il-menu"></Route>
            <Route element={<Prenota />} path="/prenota"></Route>
          </Routes>
        </div>
        <Contattaci />
      </Router>
    </div>
  );
}

export default App;

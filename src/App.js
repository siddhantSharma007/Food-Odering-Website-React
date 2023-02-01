import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Forgot from './Components/Forgot';
import Menu from './Components/Menu';
import Contact from './Components/Contact';




function App() {
  return (
    <>
    <div className="App">
     <Router>
        <Routes>
        <Route exact path="/" element={ <Login />}>
          </Route>
          <Route exact path="/home" element={<Home />} >
          </Route>
          <Route exact path="/SignUp" element={ <SignUp />} >
          </Route>
          <Route exact path="/Forgot" element={ <Forgot />} >
          </Route>
          <Route exact path="/Menu" element={ <Menu />} >
          </Route>
          <Route exact path="/contact" element={ <Contact />} >
          </Route>
      </Routes>
      </Router>
    </div>
     </>
  );
}

export default App;

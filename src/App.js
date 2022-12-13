import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";

import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Routes>
             <Route exact path="/" element={<Index />} />  
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;

import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import Hello from'./components/hello'
import AddNewIntern from "./components/AddNewIntern";

function App() {
  return (
<Router>
      <Routes>
    
        <Route path="/" element={<AddNewIntern/>}></Route>
      </Routes>
    </Router>
  
  );
}

export default App;

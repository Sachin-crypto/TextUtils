
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // ye btata h dark mode enabled h ya nhi

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#030415'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"

      // to flicker title
      // setInterval(() => {
      //   document.title = "TextUtils is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now"
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      // setting title on toggle light mode
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
    
    {/* <Navbar title="TextUtils"  aboutTxt="About Us" /> */}  
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>

    <div className="container my-3">
    
    {/* <Switch>
            <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            
            {/* <Route exact path="/"> */}
              <TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert}/>
              
            {/* </Route> */}
    {/* </Switch> */}
    
    
    </div>
    {/* </Router> */}
  
    </>
  );
}

export default App;

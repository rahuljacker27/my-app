// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextFrom from './components/TextFrom';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router ,
  Routes,
  Route ,
  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState('null');

  const showAlert = (message , type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);

    },1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
      showAlert("Dark Mode is enabled ", "success");
      document.title ="TextUtils - Dark Mode";
      setInterval(()=>{
        document.title ="TextUtils - download";

      }, 2000);
    }else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light Mode is enabled ", "success");
      document.title ="TextUtils - Light Mode";
    }
  }
  return (
    <>
    <Router>
      {/* <Navbar title = "textUtils2" aboutText ="abouttexee"/> */}
      <Navbar title = "textUtils2" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert} />
      <div className="container my-3" >
      <Routes>
          <Route exact path="/About" element={<About />}/>
          <Route exact path="/" element={<TextFrom showAlert={showAlert} heading="Enter the text" mode={mode}  />}/>
      </Routes>
      </div>
    </Router>
      
    </>
  );
}

export default App;

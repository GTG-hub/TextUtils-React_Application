// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import Typed from 'typed.js';
import Heading from './components/Heading';

//React follows camel case
function App() {
  const [mode,setMode] = useState('LIGHT');
  const toggleMode =()=>{
    if (mode==='LIGHT'){
      setMode('DARK');
      document.body.style.backgroundColor ="grey";
      showAlert("Dark mode has been enabled","success")
    }else{
      setMode('LIGHT');
      document.body.style.backgroundColor ="white";
      showAlert("Light Mode has been enabled","success")
    }
  }
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type


    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  
  return (
    <Router>
      <div>
    <Navbar title = "TextUtils" about ="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      <h3 ><Heading mode ={mode}/></h3>
    </div>
    
    {/* <About/> */}
    <Routes>
          <Route path="/about" element={<About />}/>
            
          
          
          <Route path="/" element ={<TextForm heading ="ENTER THE TEXT TO ANALYZE" mode ={mode} showAlert={showAlert}/>}/>
            
          
    </Routes>
    <Footer mode ={mode}/>
    </div>
    </Router>
     );
}

export default App;

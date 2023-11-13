

import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navber from './components/Navber';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import {BrowserRouter as Router, Routes, Route} from "react-router-dom";//import Router in react

function App() {
    const [mode, setMode] = useState('light');  //Whether dark mode is enabled or not
    const [alert,setAlert]= useState(null);

    const showAlert = (message, type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(()=>{
            setAlert(null)
        },1500)
    }
      
    const toggleMode=()=>{
        if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = "#042743";
        showAlert("Dark mode has been enabled", "success");
        document.title='TextUtils- Dark Mode Enabled';

       // setTimeout(()=>{
        //document.title='TextUtils is Amazing Mode';
        //},2000)

        //setTimeout(()=>{
           // document.title='Insall TextUtils now';
            //},1500)
          
      
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled", "success");
            document.title='TextUtils-Light Mode Enabled';
        }
    }
    return ( 
        <>
    {/*<Router>*/}

<Navber title="TextUils" AboutText="AboutUs" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3">
{/*<Routes>*/}
        {/*<Route exact path="/About" element={<About/>}/>*/}
        {/*<Route exact path="/" element={<TextForm showAlert={showAlert} heaading="Enter the text to nalyze below" mode={mode}/>}/>*/}
  {/*<Routes>*/}
          
        <TextForm showAlert={showAlert} heaading="Enter the text to nalyze below" mode={mode}/>
</div>
{/*</Router>*/}
</>    
    );
}

export default App;
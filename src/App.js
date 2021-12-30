import './App.css'; 
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import PropTypes from 'prop-types'
import AboutUs from './Components/AboutUs';
import { useState } from 'react';

function App() {
  const[mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  } 

  return (
    <>
    <Navbar title="Textutils" aboutText="About" toggleMode = {toggleMode} mode={mode}/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyse" mode={mode}/>
      {/* <AboutUs></AboutUs> */}
    </div>
    </>
    );
}
Navbar.PropTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}
Navbar.defaultProps = {
  title : 'Set title here',
  aboutText: 'Write about text here'
}

export default App;

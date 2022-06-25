import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert(
      {
        message : message,
        type: type
      }
    )
    setTimeout( () => {
      setAlert(null)
    },1500)
    
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","Success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" mode = {mode} showAlert = {showAlert}/>
      </div>

    </>
  );
}

export default App;

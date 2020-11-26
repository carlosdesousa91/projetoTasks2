import './App.css';
import React, {useState} from 'react';
import Login from './components/login';

function App() {

  const [token, setToken] = useState('');

  const userLogin = (tok) => {
    setToken(tok);
    console.log(tok);
    //console.log(token);

  }

  return (
    <div className="App">
      < Login userLogin={userLogin}/>      
    </div>
  );
}

export default App;

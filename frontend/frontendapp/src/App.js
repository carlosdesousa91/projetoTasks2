import './App.css';
import React, {useState} from 'react';
import Login from './components/login';
import Home from './components/home';
import Tasks from './components/tasks';

function App() {

  const [token, setToken] = useState('');

  const userLogin = (tok) => {
    setToken(tok);
    //console.log(tok);
    //console.log(token);

  }

  return (
    <div className="App">
      {token ? (
        <>
          < Home />
          < Tasks token={token}/>  
        </>
      ) : (
        
        < Login userLogin={userLogin}/>    
        
        
      ) }
      
      
    </div>
    
  );
}

export default App;

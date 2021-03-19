import React, {useState} from 'react';
import Login from './Login';
import Register from './Register';


const LoginRegister = () => {

  const [form, setForm] = useState('Login');

  return (
<>
    {form === 'Login' ? (
      <Login/>
      ) : (
          <Register/>
      )}
  <a href='#' onClick={()=>setForm('Register')}>S'inscrire</a>
  <a href='#' onClick={()=>setForm('Login')}>Se connecter</a>
</>

  );
};

export default LoginRegister;

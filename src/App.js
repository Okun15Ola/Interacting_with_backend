import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: ''
  });

  const url = 'https://codeguru.isaac0yen.com';

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleregisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/users/register`, register);
      alert('Register successful!');
      console.log(response.data)
      
    } catch (error) {
      console.error('Login failed:', error);
  
  };
}


  return (
    <div className="App">    
     <form onSubmit={handleregisterSubmit}>
     <input
          type='text'
          name='name'
          placeholder='Username'
          onChange={handleRegisterChange}
          value={register.name}
        />

      <input
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleRegisterChange}
          value={register.email}
        />

      <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleRegisterChange}
          value={register.password}
        />
      <Link to='/login'><button type='submit'>Login</button></Link>    
      
     </form>
    </div>
  );
}

export default App;

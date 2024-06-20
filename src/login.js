
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });


  // const [token, setToken] = useState('');
  const url = 'https://codeguru.isaac0yen.com';


  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/users/login`, loginData);
      alert('Login successful!');
      console.log(response.data)
      
    } catch (error) {
      console.error('Login failed:', error);
    
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Error response:', error.response.data);
        if (error.response.status === 401) {
          alert('Login failed: Unauthorized. Please check your email and password.');
        } else {
          alert(`Login failed: ${error.response.data.message || 'Unknown error'}`);
        }
      } else if (error.request) {
        // Request was made but no response received
        console.error('Error request:', error.request);
        alert('Login failed: No response from server.');
      } else {
        // Something else happened in setting up the request
        console.error('Error message:', error.message);
        alert('Login failed: ' + error.message);
      }
  
      console.log('Login data at the time of error:', loginData);

    }
  };

  return (
    <div className="App">    
      <form onSubmit={handleLoginSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleLoginChange}
          value={loginData.email}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleLoginChange}
          value={loginData.password}
        />
        <button type='submit'>Submit</button>
        
        
      </form>
    </div>
  );
}

export default Login;

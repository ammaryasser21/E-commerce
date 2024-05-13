import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';
import Title from './Title';
import Alert from './Alert';

const Login = ({ onCreateAccount }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerts, setAlerts] = useState([]);
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();

      if (response.ok) {

        const {token} = responseData;
        localStorage.setItem('admin-token', token);
        if(email.includes('admin')){
          navigate('/Dashboard', { replace: true });
        }else{
          navigate('/', { replace: true });
        }
        
      } else {
        setAlerts([...alerts, { type: 'error', title: 'Error', description: responseData.message }]);
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setAlerts([...alerts, { type: 'error', title: 'Error', description: 'Failed to sign in' }]);
    }
  };

  return (
    <>
      <Title title="LOGIN"/>
      <div className='login-area'>
        <div className='login-box'>
          <form className='login-form'>
            {/* Email input */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email *</label>
              <input type="email" placeholder='example.com' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
              {/* Error message for email */}
              {/* {errors.email && <div style={{ color:'red' }}>{errors.email}</div>} */}
            </div>
            {/* Password input */}
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password *</label>
              <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
              {/* Error message for password */}
              {/* {errors.password && <div style={{ color:'red' }}>{errors.password}</div>} */}
            </div>
            {/* Sign in button */}
            <div className="d-grid gap-2">
              <button type="submit" className="sign-in-btn btn" onClick={handleSignIn}>SIGNIN</button>
            </div>
            {/* Create account button */}
            <div className='d-flex justify-content-center'>
              <button className="btn c-acc-btn" onClick={onCreateAccount}>CREATE ACCOUNT</button>
            </div>
          </form>
        </div>
      </div>
      {/* Alert component */}
      <Alert alerts={alerts} setAlerts={setAlerts} />
    </>
  )
}

export default Login;

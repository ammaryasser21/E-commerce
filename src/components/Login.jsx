import React, { useState } from'react';
import './css/Login.css';
import Title from './Title';
import Alert from './Alert';

const Login = ({ onCreateAccount, onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerts, setAlerts] = useState([]);
  const [errors, setErrors] = useState({});

  const handleSignIn = (event) => {
    event.preventDefault();
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      const storedAccounts = JSON.parse(localStorage.getItem('accounts'));
      if (storedAccounts[email].password === password) {
        localStorage.setItem('token', email);
        onSignIn(email, password);
      } else {
        setAlerts([...alerts, { type: 'error', title: 'Error', description: 'Invalid email or password' }]);
      }
    }
  };

  return (
    <>
      <Title title="LOGIN"/>
      <div className='login-area'>
        <div className='login-box'>
          <form className='login-form'>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email *</label>
              <input type="email" placeholder='example.com' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <div style={{ color:'red' }}>{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password *</label>
              <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
              {errors.password && <div style={{ color:'red' }}>{errors.password}</div>}
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="sign-in-btn btn" onClick={handleSignIn}>SIGNIN</button>
            </div>
            <div className='d-flex justify-content-center'>
              <button className="btn c-acc-btn" onClick={onCreateAccount}>CREATE ACCOUNT</button>
            </div>
          </form>
        </div>
      </div>
      <Alert alerts={alerts} setAlerts={setAlerts} />
    </>
  )
}

export default Login;
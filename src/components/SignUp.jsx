import React, { useState } from'react';
import './css/SignUp.css';
import Title from './Title';
import Alert from './Alert';

const SignUp = ({ onAlreadyHaveAccount, onSignUp }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alerts, setAlerts] = useState([]);
  const [errors, setErrors] = useState({});

  const handleSignUp = (event) => {
    event.preventDefault();
    const errors = {};
    if (!firstName) {
      errors.firstName = 'First name is required';
    }
    if (!lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    if (password!== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      const account = {
        firstName,
        lastName,
        phone,
        email,
        password,
      };
      localStorage.setItem('accounts', JSON.stringify({...account }));
      localStorage.setItem('username', firstName);
      onSignUp(account);
    }
  };

  return (
    <>
      <Title title="SIGNUP"/>
      <div className='login-area'>
        <div className='login-box'>
          <form className='login-form'>
            <div className='d-flex justify-content-between'>
              <div className="mb-3">
                <label htmlFor="exampleInputFirstName" className="form-label">First name *</label>
                <input type="text" placeholder='' className="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {errors.firstName && <div style={{ color:'red' }}>{errors.firstName}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputLastName" className="form-label">Last name *</label>
                <input type="text" placeholder='' className="form-control" id="exampleInputLastName" aria-describedby="emailHelp" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {errors.lastName && <div style={{ color:'red' }}>{errors.lastName}</div>}
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPhone" className="form-label">phone number  <span className='optional'>{"(optional)"}</span></label>
              <input type="text" placeholder='' className="form-control" id="exampleInputPhone" aria-describedby="emailHelp" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email *</label>
              <input type="email" placeholder='example.com' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <div style={{ color:'red' }}>{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password *</label>
              <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
              {errors.password && <div style={{ color:'red' }}>{errors.password}</div>}
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword2" className="form-label">Confirm Password *</label>
              <input type="password" className="form-control" id="exampleInputPassword2" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              {errors.confirmPassword && <div style={{ color:'red' }}>{errors.confirmPassword}</div>}
            </div>
            <div className="d-grid gap-2">
              <button className="sign-in-btn btn" onClick={handleSignUp}> Sign Up</button>
            </div>
            <div className="d-flex justify-content-center">
              <button className=" btn c-acc-btn" onClick={onAlreadyHaveAccount}> Already have an account</button>
            </div>
          </form>
        </div>
      </div>
      <Alert alerts={alerts} setAlerts={setAlerts} />
    </>
  )
}

export default SignUp
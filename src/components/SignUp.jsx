import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Title from './Title';
import Alert from './Alert';

const SignUp = ({ onAlreadyHaveAccount, onSignUp }) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alerts, setAlerts] = useState([]);
  const [errors, setErrors] = useState({});

  const handleSignUp = async (event) => {
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
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Determine role based on email
      const role = email.includes('admin') ? 'ADMIN' : 'USER';
      const account = {
        firstName,
        lastName,
        email,
        password,
        role,
      };
      try {
        const response = await fetch('http://localhost:5000/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(account),
        });
        const responseData = await response.json();
        console.log(responseData);
        if (response.ok) {
          localStorage.setItem('token', responseData.data.token);
          if (email.includes('admin')) {
            navigate('/Dashboard', { replace: true });
          } else {
            navigate('/', { replace: true });
          }
        } else {
          setAlerts([...alerts, { type: 'error', title: 'Error', description: responseData.message }]);
        }
      } catch (error) {
        console.error('Error signing up:', error);
        setAlerts([...alerts, { type: 'error', title: 'Error', description: 'Failed to sign up' }]);
      }
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
              <label htmlFor="exampleInputPhone" className="form-label">Phone number <span className='optional'>(optional)</span></label>
              <input type="text" placeholder='' className="form-control" id="exampleInputPhone" aria-describedby="emailHelp" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email *</label>
              <input type="email" placeholder='example@example.com' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <div style={{ color:'red' }}>{errors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password *</label>
              <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
              {errors.password && <div style={{ color:'red' }}>{errors.password}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password *</label>
              <input type="password" className="form-control" id="exampleInputPassword2" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              {errors.confirmPassword && <div style={{ color:'red' }}>{errors.confirmPassword}</div>}
            </div>
            <div className="d-grid gap-2">
              <button className="sign-in-btn btn" onClick={handleSignUp}>Sign Up</button>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn c-acc-btn" onClick={onAlreadyHaveAccount}>Already have an account</button>
            </div>
          </form>
        </div>
      </div>
      <Alert alerts={alerts} setAlerts={setAlerts} />
    </>
  );
};

export default SignUp;

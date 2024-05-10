import React, { useState, useEffect } from'react';
import Login from './Login';
import SignUp from './SignUp';
import Alert from './Alert';

const Registration = () => {
  const [login, setLogin] = useState(true);
  const [accounts, setAccounts] = useState({});
  const [alerts, setAlerts] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleCreateAccount = () => {
    setLogin(false);
  };

  const handleAlreadyHaveAccount = () => {
    setLogin(true);
  };

  const handleSignUp = (account) => {
    const newAccounts = {...accounts, [account.email]: account };
    localStorage.setItem('accounts', JSON.stringify(newAccounts));
    setAccounts(newAccounts);
    setToken(account.email);
    localStorage.setItem('token', account.email);
    window.location.href = '/';
    setAlerts([...alerts, { type:'success', title: 'SignUp', description: 'Successful registration' }]);
  };

  const handleSignIn = ({ email, password }) => {
    const storedAccounts = JSON.parse(localStorage.getItem('accounts'));
    if (storedAccounts && storedAccounts[email] && storedAccounts[email].password === password) {
      setToken(email);
      localStorage.setItem('token', email);
      window.location.href = '/';
    } else {
      setAlerts([...alerts, { type: 'error', title: 'Error', description: 'Invalid email or password' }]);
    }
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <>
      {token? (
        <div>
          <p>Welcome, {token}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        login? (
          <Login onCreateAccount={handleCreateAccount} onSignIn={handleSignIn} />
        ) : (
          <SignUp onAlreadyHaveAccount={handleAlreadyHaveAccount} onSignUp={handleSignUp} />
        )
      )}
      <Alert alerts={alerts} setAlerts={setAlerts} />
    </>
  );
};

export default Registration;
import React, { useState} from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Alert from './Alert';

const Registration = () => {
  const [login, setLogin] = useState(true);
  const [alerts, setAlerts] = useState([]);

  const handleCreateAccount = () => {
    setLogin(false);
  };

  const handleAlreadyHaveAccount = () => {
    setLogin(true);
  };


  return (
    <>
      {login ? (
        <Login onCreateAccount={handleCreateAccount}  />
      ) : (
        <SignUp onAlreadyHaveAccount={handleAlreadyHaveAccount} />
      )}
      <Alert alerts={alerts} setAlerts={setAlerts} />
    </>
  );
};

export default Registration;

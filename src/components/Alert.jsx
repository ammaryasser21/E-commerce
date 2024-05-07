import React, { useEffect } from 'react';
import './css/Alert.css';

const Alert = ({ alerts, setAlerts }) => {
  useEffect(() => {
    const timeoutIds = [];
    alerts.forEach((alert, index) => {
      const timeoutId = setTimeout(() => {
        setAlerts((prevAlerts) => prevAlerts.filter((_, i) => i !== index));
      }, 1500);
      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [alerts, setAlerts]);

  const handleClose = (index) => {
    setAlerts(alerts.filter((_, i) => i !== index));
  };

  return (
    <div className="alert-container">
      {alerts.map((alert, index) => (
        <div
          key={alert.index}
          className={`alert ${alert.type}`}
        >
          {alert.type === 'success' && <i className="fas fa-check-circle" />}
          {alert.type === 'error' && <i className="fas fa-exclamation-circle" />}
          {alert.type === 'info' && <i className="fas fa-info-circle" />}
          {alert.type === 'warning' && <i className="fas fa-exclamation-triangle" />}
          <div className='alert-content'><h4>{alert.title}</h4>
            <p>{alert.description}</p></div>

          <button style={{ border: 'none', background: 'none' }} className="close" onClick={() => handleClose(index)}>
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default Alert;
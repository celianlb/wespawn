import style from '../styles/Countdown.module.css';

import { useEffect, useState } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2023-06-30T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const containerStyle: React.CSSProperties = {
    width: '74px',
    height: '75px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #D2F843',
    borderRadius: '8px',
    marginRight: '16px',
    marginTop: '24px',
    marginBottom: '64px',
  };
  const digitStyle: React.CSSProperties = {

    fontWeight: 'bold',
  };

  const labelStyle: React.CSSProperties = {
  };

  return (
    <div className="flex justify-start">
      <div className="text-center" style={containerStyle}>
        <h2 style={digitStyle}>{timeLeft.days}</h2>
        <p style={labelStyle}>Jours</p>
      </div>
      <div className="text-center" style={containerStyle}>
        <h2 style={digitStyle}>{timeLeft.hours}</h2>
        <p style={labelStyle}>Heures</p>
      </div>
      <div className="text-center" style={containerStyle}>
        <h2 style={digitStyle}>{timeLeft.minutes}</h2>
        <p style={labelStyle}>Min</p>
      </div>
      <div className="text-center" style={containerStyle}>
        <h2 style={digitStyle}>{timeLeft.seconds}</h2>
        <p style={labelStyle}>Sec</p>
      </div>
    </div>

  );
};

export default Countdown;


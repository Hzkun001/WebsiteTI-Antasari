import React, { useState } from 'react';
import './torch-darkmode.css'; // Buat file CSS terpisah untuk animasi kompleks

const TorchDarkModeToggle: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="torch-toggle-wrapper">
      <label className="torch-container">
        <div className="simple-text select-none"></div>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <div className="checkmark" />
        <div className="torch">
          <div className="light-effect" />
          <div className="glow-effect" />
          <div className="particles">
            {Array.from({ length: 8 }).map((_, i) => <span key={i} />)}
          </div>
          <div className="smoke">
            {Array.from({ length: 4 }).map((_, i) => <span key={i} />)}
          </div>
          <div className="head">
            <div className="face top">{Array.from({ length: 4 }).map((_, i) => <div key={i} />)}</div>
            <div className="face left">{Array.from({ length: 4 }).map((_, i) => <div key={i} />)}</div>
            <div className="face right">{Array.from({ length: 4 }).map((_, i) => <div key={i} />)}</div>
          </div>
          <div className="stick">
            <div className="side side-left">{Array.from({ length: 5 }).map((_, i) => <div key={i} />)}</div>
            <div className="side side-right">{Array.from({ length: 5 }).map((_, i) => <div key={i} />)}</div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default TorchDarkModeToggle;

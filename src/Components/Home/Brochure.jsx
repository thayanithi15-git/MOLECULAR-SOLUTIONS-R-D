import React from 'react';
import './Brochure.css'; // Ensure you import the CSS file

export default function Brochure() {
  return (
    <div className="button-container">
      <a href="/brochure.pdf" download className="refined-animated-button">
        Download Brochure
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M12 16l-4-4h3V4h2v8h3l-4 4zm0 2c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7z" />
          </svg>
        </span>
        <div className="wave-animation"></div>
      </a>
    </div>
  );
}

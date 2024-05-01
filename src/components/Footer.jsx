import React from 'react';
function Footer() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  return (
    <footer className="footer">
      <p>
        {formattedDate} - {formattedTime}
      </p>
    </footer>
  );
}

export default Footer;

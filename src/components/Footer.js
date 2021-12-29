import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="container">
        <p>© Pakawat Noosaard 1998-{new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Footer;

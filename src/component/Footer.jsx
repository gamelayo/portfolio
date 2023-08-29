import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className="text-center py-6 ">
        &copy; {year} Gamel Ayodele, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

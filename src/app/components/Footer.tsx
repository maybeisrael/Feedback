import React from "react";

const Footer = () => {
  return (
    <footer className=" footer flex items-center justify-between border-t p-8 text-center text-gray-500 mt-16">
          <span> {new Date() .getFullYear()} &copy; All Rights Reserved</span>
             <div>
              Built by <span className='text-2xl px-1'>&#9825;</span>Israel
             </div>
             </footer>
  );
};

export default Footer;

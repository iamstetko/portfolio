import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer>{currentYear} here will be a footer</footer>;
};

export default Footer;

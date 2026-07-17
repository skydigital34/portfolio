import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p>© {currentYear} FTC DIGITAL SOLUTION. ALL RIGHTS RESERVED.</p>
    </footer>
  );
}

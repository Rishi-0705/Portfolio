import React from 'react';

const whatsappNumber = '+60125545562'; // Replace with your WhatsApp number in international format, e.g., 1234567890
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const floatAnim = `
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
    100% { transform: translateY(0); }
  }
`;

const styles: React.CSSProperties = {
  position: 'fixed',
  bottom: '24px',
  right: '24px',
  zIndex: 1000,
  backgroundColor: '#25D366',
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'transform 0.2s cubic-bezier(.4,2,.6,1), box-shadow 0.2s',
  animation: 'float 2.5s ease-in-out infinite',
};

const iconStyle: React.CSSProperties = {
  width: '40px', // Increased from 32px to 40px
  height: '40px',
  display: 'block',
};

const styleSheet = `
${floatAnim}
.whatsapp-btn:hover {
  transform: scale(1.08) translateY(-4px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.25);
}
`;

const WhatsAppButton: React.FC = () => {
  return (
    <>
      <style>{styleSheet}</style>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        style={styles}
        aria-label="Chat on WhatsApp"
      >
        {/* Official WhatsApp SVG icon */}
        <svg style={iconStyle} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#25D366"/>
          <path d="M16 6C10.5 6 6 10.5 6 16c0 2 .7 3.9 1.8 5.5L8 26l4.6-1.2C14.1 25.5 15 26 16 26c5.5 0 10-4.5 10-10S21.5 6 16 6zm0 18c-1.7 0-3.3-.5-4.7-1.4l-.3-.2-2.7.7.7-2.6-.2-.3C7.5 19.3 7 17.7 7 16c0-5 4-9 9-9s9 4 9 9-4 9-9 9zm4.2-5.3c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.1-.5.7-.7.8-.1.1-.3.2-.5.1-.7-.2-2.5-.9-3.6-2.9-.3-.5.3-.5.7-1.7.1-.2 0-.4-.1-.5-.1-.1-.3-.2-.5-.2h-.4c-.1 0-.3 0-.5.2-.2.2-.7.7-.7 1.7 0 1 .7 2.1 1.6 2.9 1.1 1.1 2.5 1.5 3.5 1.5.7 0 1.1-.3 1.3-.5.2-.2.3-.3.4-.5.1-.2.1-.3.1-.5 0-.1-.1-.2-.2-.3z" fill="#fff"/>
        </svg>
      </a>
    </>
  );
};

export default WhatsAppButton; 
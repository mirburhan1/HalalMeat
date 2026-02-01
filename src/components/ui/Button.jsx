import React from 'react';

export const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "btn-3d px-6 py-3 text-lg transition-all transform";
  
  const variants = {
    primary: "bg-green-700 text-white hover:bg-green-800",
    secondary: "bg-white text-green-800 border-2 border-green-700 hover:bg-gray-50",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white/10"
  };

  // We are using vanilla CSS classes defined in index.css but applying inline styles for dynamic colors if needed
  // For now using class names that map to what standard tailwind would look like, but since I am using Vanilla CSS mostly:
  // I will use style objects or just class names if I had tailwind.
  // The user didn't ask for Tailwind explicitly, but instructed: "Avoid using TailwindCSS unless the USER explicitly requests it".
  // I must use Vanilla CSS. I will adjust this component to use Vanilla CSS classes.
  
  const getVariantClass = () => {
    switch (variant) {
      case 'primary': return 'btn-primary';
      case 'secondary': return 'btn-secondary';
      case 'outline': return 'btn-outline';
      default: return 'btn-primary';
    }
  };

  return (
    <button 
      className={`btn-3d ${getVariantClass()} ${className}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

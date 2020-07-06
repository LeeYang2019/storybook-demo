import React from 'react';

const Button = ({ children, ...rest }) => {
  return (
    <button
      className="button"
      {...rest}
      style={{
        backgroundColor: 'blue',
      }}
    >
      {children}
    </button>
  );
};

export default Button;

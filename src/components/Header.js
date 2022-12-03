import React from 'react';

const Header = () => {
  const headerStyle = {
    padding: '1.5rem 0',
    lineHeight: '2rem',
  };
  return (
    <header style={headerStyle}>
      <h1 style={{fontSize: '2rem', marginBottom: '1rem'}}>Simple Todo App</h1>
      <p style={{fontSize: '1rem'}}>
        Please add todos items through the input fields
      </p>
    </header>
  );
};

export default Header;

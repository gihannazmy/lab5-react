import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ThemeContext from '../context/ThemeContext';




const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme} variant={theme === 'light' ? 'dark' : 'light'}>
      Toggle Theme
    </Button>
    
  );
};

export default ThemeToggleButton;

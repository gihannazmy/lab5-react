
import React from 'react';
import AppRoute from './AppRoute/AppRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import LanguageProvider from './context/LanguageProvider';
import ThemeProvider from './context/ThemeProvider';
import './App.css';



function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <AppRoute />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './EnHeader';
import MainContent from './MainContent';

function App() {
  return (
    <div className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 min-h-screen">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;

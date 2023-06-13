
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Section from './components/Section';
import Rating from './components/Rating';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Header />
      <Section />

    </div>
  );
}

export default App;

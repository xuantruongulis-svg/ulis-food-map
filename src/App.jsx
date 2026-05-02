import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import InteractiveMap from './components/InteractiveMap';
import TodaySpecial from './components/TodaySpecial';
import Services from './components/Services';
import Community from './components/Community';
import About from './components/About';
import Footer from './components/Footer';
import FeedbackAndForm from './components/FeedbackAndForm';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <InteractiveMap />
        <TodaySpecial />
        <Services />
        <Community />
        <FeedbackAndForm />
      </main>
      <Footer />
    </>
  );
}

export default App;

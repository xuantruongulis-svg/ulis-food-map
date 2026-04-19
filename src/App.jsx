import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
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
        <TodaySpecial />
        <Services />
        <InteractiveMap />
        <Community />
        <FeedbackAndForm />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;

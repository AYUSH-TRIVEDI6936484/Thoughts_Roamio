import React from 'react';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header';
import Features from './components/Features';
import Topics from './components/Topics';
import Security from './components/Security';
import Testimonials from './components/Testimonials';
import Insights from './components/Insights';
import Footer from './components/Footer';
import Recentposts from './components/Recentposts';
import Content from './components/Content';
import Stories from './components/Stories';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Recentposts />
      <Features />
      <Topics />
      <Content />
      <Security />
      <Testimonials />
      <Stories />
      <Insights />
      <Footer />
    </div>
  );
};

export default App;

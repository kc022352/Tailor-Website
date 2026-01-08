import React from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="menu">
        <Menu />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </Layout>
  );
}

export default App;


import React from "react";
import "./App.css";
import LeftSocialBar from "./components/LeftSocialBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <LeftSocialBar />
      <Navbar />
      <Hero />
      <Quote />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

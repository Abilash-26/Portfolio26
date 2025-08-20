import React from "react";
import { Routes, Route } from "react-router-dom";
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
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <LeftSocialBar />
              <Navbar />
              <Hero />
              <Quote />
              <Projects />
              <Skills />
              <About />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Projects Page */}
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;

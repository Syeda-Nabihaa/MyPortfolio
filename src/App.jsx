import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout/Layout";
import ContactPage from "./pages/ContactPage";
import Education from "./pages/Education";

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/education" element={<Education />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

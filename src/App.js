import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import ProjectsBanner from "./components/ProjectsBanner";
import FooterPortfolio from "./components/FooterPortfolio";
import ContactForm from "./components/ContactForm";
import FitLabBanner from "./components/FitLabBanner";
import DMVRex from "./components/projects/DMVRex";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />

        <Route
          path="/"
          element={
            <>
              <Banner />
              <ProjectsBanner />
              <FooterPortfolio />
            </>
          }
        />

        <Route
          path="/home"
          element={
            <>
              <Banner />
              <ProjectsBanner />
              <FooterPortfolio />
            </>
          }
        />
        <Route path="/introduction" element={<AboutMe />} />

        <Route path="/contact" element={<ContactForm />} />

        <Route
          path="/project/dmvrex"
          element={
            <>
              <DMVRex />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

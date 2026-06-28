import { useState } from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Services from "./components/Services.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero setActiveSection={setActiveSection} />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

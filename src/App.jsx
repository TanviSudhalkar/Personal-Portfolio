import {Navbar} from "@/layout/Navbar";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Projects} from "@/sections/Projects";
import {Experience} from "@/sections/Experience";
import {Testimonials} from "@/sections/Testimonials";
import {Contact} from "@/sections/Contact";
import {Footer} from "@/layout/Footer";
import { use, useEffect } from "react";

function App() {

  useEffect(() => {
    //Create the script element
    const botScript = document.createElement("script");
    botScript.src = "https://cdn.botforge.in/widget.js";
    botScript.async = true;
    //Append the script to the document body
    document.body.appendChild(botScript);
    //Cleanup function: Removes the script if the component unmounts
    return () => {
      document.body.removeChild(botScript);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
export default App

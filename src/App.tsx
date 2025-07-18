import { useEffect } from "react";
import ContactSection from "./components/ContactSection/ContactSection";
import CustomCursor from "./components/CustomCursor";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

function App() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <div className="cursor-none">
            <CustomCursor />
            <Header />
            <Hero />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;

import ContactSection from "./components/ContactSection/ContactSection";
import CustomCursor from "./components/CustomCursor";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import SmoothScroll from "./components/SmoothScroll";
import Scene3D from "./components/3d/Scene3D";

function App() {
    // AOS removed in favor of Framer Motion (to be implemented in components)
    
    return (
        <SmoothScroll>
            <div className="cursor-none relative z-10">
                <CustomCursor />
                <Scene3D />
                <Header />
                <main>
                    <Hero />
                    <ProjectsSection />
                    <ExperienceSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </SmoothScroll>
    );
}

export default App;

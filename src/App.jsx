import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
        </div>
    );
}

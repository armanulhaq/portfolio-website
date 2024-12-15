import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
        </div>
    );
}

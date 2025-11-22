import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Dock from "@/components/Dock";
import Terminal from "@/windows/Terminal";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
    </main>
  );
}

export default App;

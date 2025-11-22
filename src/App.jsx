import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Dock from "@/components/Dock";
import Terminal from "@/windows/Terminal";
import Safari from "@/windows/Safari";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import Resume from "./windows/Resume";
import FinderWindow from "./windows/Finder";
import TextWindow from "./windows/Text";
import ImageWindow from "./windows/Image";
import ContactWindow from "./windows/Contact";
import Home from "./windows/Home";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <FinderWindow />
      <TextWindow />
      <ImageWindow />
      <ContactWindow />
      <Home />
    </main>
  );
}

export default App;

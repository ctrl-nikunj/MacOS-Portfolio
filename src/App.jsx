import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Dock from "@/components/Dock";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import Home from "./windows/Home";
import Snowfall from "react-snowfall";

const Terminal = lazy(() => import("@/windows/Terminal"));
const Safari = lazy(() => import("@/windows/Safari"));
const Resume = lazy(() => import("./windows/Resume"));
const FinderWindow = lazy(() => import("./windows/Finder"));
const TextWindow = lazy(() => import("./windows/Text"));
const ImageWindow = lazy(() => import("./windows/Image"));
const ContactWindow = lazy(() => import("./windows/Contact"));

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Snowfall />
      <Navbar />
      <Welcome />
      <Dock />
      <Home />
      <Suspense fallback={null}>
        <Terminal />
        <Safari />
        <Resume />
        <FinderWindow />
        <TextWindow />
        <ImageWindow />
        <ContactWindow />
      </Suspense>
    </main>
  );
}

export default App;

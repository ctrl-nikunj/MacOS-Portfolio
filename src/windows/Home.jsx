import { locations } from "@/constants";
import useLocationStore from "@/store/location";
import useWindowStore from "@/store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";

const projects = locations.work?.children ?? [];
export default function Home() {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const handleOpen = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };
  useGSAP(() => {
    Draggable.create(".folder");
  }, []);
  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.windowPosition)}
            onClick={() => handleOpen(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

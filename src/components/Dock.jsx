import useWindowStore from "@/store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";

export default function Dock() {
  const dockRef = useRef(null);
  const { openWindow, closeWindow, windows } = useWindowStore();

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return () => {};

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();
      icons.forEach((icon) => {
        const { left: l, width: w } = icon.getBoundingClientRect();
        const distance = Math.abs(mouseX - (l - left + w / 2));
        const intensity = Math.exp(-(distance ** 2.3) / 15000);
        gsap.to(icon, {
          duration: 0.2,
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          ease: "power1.out",
        });
      });
    };
    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      const mouseX = e.clientX - left;
      animateIcons(mouseX);
    };
    const handleMouseLeave = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          duration: 0.25,
          scale: 1,
          y: 0,
          ease: "power1.out",
        });
      });
    };

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const toggleApp = (app) => {
    if (!app.canOpen) return () => {};

    const window = windows[app.id];

    if (!window) {
      console.error(`window ${app.id} not found`);
      return;
    }

    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  const dockApps = [
    {
      id: "finder",
      name: "Finder",
      icon: "/images/finder.png",
      canOpen: true,
    },
    {
      id: "safari",
      name: "Articles",
      icon: "/images/safari.png",
      canOpen: true,
    },
    {
      id: "contacts",
      name: "Contact",
      icon: "/images/contact.png",
      canOpen: true,
    },
    {
      id: "terminal",
      name: "Terminal",
      icon: "/images/terminal.png",
      canOpen: true,
    },
    {
      id: "trash",
      name: "Archives",
      icon: "/images/trash.png",
      canOpen: false,
    },
  ];
  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id ?? name} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => {
                toggleApp({ id, canOpen });
              }}
            >
              <img
                src={icon}
                alt={name}
                loading="lazy"
                className={canOpen ? " " : "opacity-50"}
              />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
}

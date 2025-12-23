import useWindowStore from "@/store/window";
import useLocationStore from "@/store/location";
import { getAssetPath } from "@/utils/helpers";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";
import { locations } from "@/constants";
import useThemeStore from "@/store/theme";

export default function Dock() {
  const dockRef = useRef(null);
  const { activeLocation, setActiveLocation } = useLocationStore();
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

    if (app.id === "trash") {
      if (windows.finder.isOpen && activeLocation?.id === locations.trash.id) {
        closeWindow("finder");
      } else {
        setActiveLocation(locations.trash);
        openWindow("finder");
      }
      return;
    }

    const window = windows[app.id];

    if (!window) {
      console.error(`window ${app.id} not found`);
      return;
    }

    if (window.isOpen) {
      if (activeLocation?.id !== locations.work.id) {
        setActiveLocation(locations.work);
      } else {
        closeWindow(app.id);
      }
    } else {
      app.id === "finder" ? setActiveLocation(locations.work) : null;
      openWindow(app.id);
    }
  };

  const dockApps = [
    {
      id: "finder",
      name: "Finder",
      icon: getAssetPath("/images/finder.png"),
      canOpen: true,
    },
    {
      id: "safari",
      name: "Articles",
      icon: getAssetPath("/images/safari.png"),
      canOpen: true,
    },
    {
      id: "contacts",
      name: "Contact",
      icon: getAssetPath("/images/contact.png"),
      canOpen: true,
    },
    {
      id: "terminal",
      name: "Tech Stack",
      icon: getAssetPath("/images/terminal.png"),
      canOpen: true,
    },
    {
      id: "trash",
      name: "Trash",
      icon: getAssetPath("/images/trash.png"),
      canOpen: true,
    },
  ];

  const { theme } = useThemeStore();

  return (
    <section id="dock">
      <div
        ref={dockRef}
        className={`dock-container ${
          theme === "dark" ? "bg-black/50" : "bg-white/50"
        } transition-colors duration-400`}
      >
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

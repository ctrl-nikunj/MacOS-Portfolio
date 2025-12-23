import useThemeStore from "@/store/theme";
import useWindowStore from "@/store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";

export default function WindowWrapper(Component, windowKey) {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    const firstRender = useRef(true);

    useGSAP(() => {
      const element = ref.current;
      if (!element) return;

      if (isOpen) {
        element.style.display = "block";
        gsap.fromTo(
          element,
          { scale: 0.8, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: "power3.out" }
        );
      } else {
        if (firstRender.current) {
          element.style.display = "none";
        } else {
          gsap.to(element, {
            scale: 0.8,
            opacity: 0,
            y: 40,
            duration: 0.3,
            ease: "power3.in",
            onComplete: () => {
              element.style.display = "none";
            },
          });
        }
      }
      firstRender.current = false;
    }, [isOpen]);

    useGSAP(() => {
      const element = ref.current;
      if (!element) return () => {};

      const [instance] = Draggable.create(element, {
        onPress: () => focusWindow(windowKey),
      });

      return () => {
        instance.kill();
      };
    }, []);

    const { theme } = useThemeStore();
    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className={
          "absolute transition-colors duration-400 " +
          (theme === "dark" ? "bg-zinc-700" : "bg-white")
        }
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;
  return Wrapped;
}

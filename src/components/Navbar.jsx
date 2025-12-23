import useWindowStore from "@/store/window";
import useThemeStore from "@/store/theme";
import dayjs from "dayjs";
import { getAssetPath } from "@/utils/helpers";
import { Tooltip } from "react-tooltip";

export default function Navbar() {
  const data = [
    { id: 1, name: "Projects", type: "finder" },
    { id: 2, name: "Contact", type: "contacts" },
    { id: 3, name: "Resume", type: "resume" },
  ];

  const navIcons = [
    {
      id: 3,
      name: "Wi-Fi",
      icon: getAssetPath("/icons/wifi.svg"),
      dark: getAssetPath("/icons/wifi-white.svg"),
    },
    {
      id: 2,
      name: "Spotlight",
      icon: getAssetPath("/icons/search.svg"),
      dark: getAssetPath("/icons/search-white.svg"),
    },
    {
      id: 4,
      name: "User",
      icon: getAssetPath("/icons/user.svg"),
      dark: getAssetPath("/icons/user-white.svg"),
    },
    {
      id: 1,
      name: "Control Centre",
      icon: getAssetPath("/icons/mode.svg"),
      dark: getAssetPath("/icons/mode-white.svg"),
    },
  ];

  const { theme } = useThemeStore();

  const { openWindow } = useWindowStore();
  const { toggleTheme } = useThemeStore();

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-black/50" : "bg-white/50"
      } transition-colors duration-400`}
    >
      <div>
        <img
          src={
            theme === "dark"
              ? getAssetPath("/images/logo-white.svg")
              : getAssetPath("/images/logo.svg")
          }
        />
        <p
          className={`font-semibold hidden md:block ${
            theme === "dark" ? "text-white" : "text-black"
          } transition-colors duration-400`}
        >
          Nikunj's Portfolio
        </p>
        <ul>
          {data.map((item) => (
            <li
              key={item.id}
              className={`hover:bg-white/10 ${
                theme === "dark" ? "text-white" : "text-black"
              } p-0.5 rounded-lg transition-colors duration-400`}
              onClick={() => openWindow(item.type)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.name}
              data-tooltip-id="nav-tooltip"
              data-tooltip-content={item.name}
              data-tooltip-delay-show={100}
              onClick={item.name === "Control Centre" ? toggleTheme : undefined}
            >
              <img
                key={item.id}
                src={theme === "dark" ? item.dark : item.icon}
                className={`icon-hover ${
                  theme === "dark" ? "dark-icon-hover" : ""
                }`}
                alt={`icon-${item.id}`}
              />
            </button>
          ))}
        </ul>
        <Tooltip id="nav-tooltip" place="bottom" className="tooltip" />
        <time
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } transition-colors duration-400`}
        >
          {dayjs().format("ddd MMM D h:MM A")}
        </time>
      </div>
    </nav>
  );
}

import useWindowStore from "@/store/window";
import dayjs from "dayjs";
import { getAssetPath } from "@/utils/helpers";

export default function Navbar() {
  const data = [
    { id: 1, name: "Projects", type: "finder" },
    { id: 2, name: "Contact", type: "contacts" },
    { id: 3, name: "Resume", type: "resume" },
  ];

  const navIcons = [
    { id: 3, icon: getAssetPath("/icons/wifi.svg") },
    { id: 2, icon: getAssetPath("/icons/search.svg") },
    { id: 4, icon: getAssetPath("/icons/user.svg") },
    { id: 1, icon: getAssetPath("/icons/mode.svg") },
  ];

  const { openWindow } = useWindowStore();

  return (
    <nav>
      <div>
        <img src={getAssetPath("/images/logo.svg")} />
        <p className="font-semibold hidden md:block">Nikunj's Portfolio</p>
        <ul>
          {data.map((item) => (
            <li
              key={item.id}
              className="hover:bg-white/10 p-0.5 rounded-lg"
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
            <li key={item.id}>
              <img
                src={item.icon}
                className="icon-hover"
                alt={`icon-${item.id}`}
              />
            </li>
          ))}
        </ul>
        <time>{dayjs().format("ddd MMM D h:MM A")}</time>
      </div>
    </nav>
  );
}

import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import { locations } from "@/constants/index";
import useLocationStore from "@/store/location";
import { Search } from "lucide-react";
import useWindowStore from "@/store/window";
import useThemeStore from "@/store/theme";

function Finder() {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const openItem = (item) => {
    if (item.fileType === "pdf") openWindow("resume");
    if (item.kind === "folder") setActiveLocation(item);
    if (item.fileType === "url" && (item.href !== "#" || !item.href))
      window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (items) =>
    items.map((item) => (
      <li
        key={item.id}
        className={`${
          item.id === activeLocation.id
            ? theme === "dark"
              ? "active-dark "
              : "active"
            : "not-active"
        } ${theme === "dark" ? "text-white" : "text-black"} 
        ${theme === "dark" ? "hover:bg-zinc-600" : "hover:bg-zinc-200"} 
        transition-colors duration-400`}
        onClick={() => setActiveLocation(item)}
      >
        <div className="flex items-center gap-2">
          <img src={item.icon} className="w-4" alt={item.name} />
          <p className="text-sm font-medium truncate">
            {item.name.length > 14 ? item.name.slice(0, 13) + "..." : item.name}
          </p>
        </div>
      </li>
    ));

  const { theme } = useThemeStore();

  return (
    <>
      <div
        id="window-header"
        className={
          (theme === "dark"
            ? "bg-zinc-600 border-b border-zinc-600"
            : "bg-white border-b border-zinc-200") +
          " transition-colors duration-400"
        }
      >
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="flex h-full bg-white">
        <div
          className={
            "sidebar transition-colors duration-400 " +
            (theme === "dark"
              ? "bg-zinc-700 border-r border-zinc-600"
              : "bg-white")
          }
        >
          <div>
            <h3>Favorites</h3>
            <ul>{renderList(Object.values(locations))}</ul>
          </div>
          <div>
            <h3>Work</h3>
            <ul>{renderList(locations.work.children)}</ul>
          </div>
        </div>
        <ul
          className={`content ${
            theme === "dark" ? "bg-zinc-700" : "bg-white"
          } transition-colors duration-400`}
        >
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={`${item.position} ${
                theme === "dark" ? "text-white" : "text-black"
              } hover:bg-zinc-${
                theme === "dark" ? "600" : "200"
              } py-2 rounded-lg transition-colors duration-400`}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;

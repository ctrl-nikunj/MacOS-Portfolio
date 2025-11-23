import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import { locations } from "@/constants/index";
import useLocationStore from "@/store/location";
import { Search } from "lucide-react";
import useWindowStore from "@/store/window";

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
        className={item.id === activeLocation.id ? "active" : "not-active"}
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
  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="flex h-full bg-white">
        <div className="sidebar">
          <div>
            <h3>Favorites</h3>
            <ul>{renderList(Object.values(locations))}</ul>
          </div>
          <div>
            <h3>Work</h3>
            <ul>{renderList(locations.work.children)}</ul>
          </div>
        </div>
        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
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

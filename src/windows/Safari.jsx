import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import { getAssetPath } from "@/utils/helpers";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";

function Safari() {
  const sites = [
    {
      id: 1,
      name: "Endless Horse",
      link: "http://endless.horse/",
      image: getAssetPath("/images/horse.jpg"),
    },
    {
      id: 2,
      name: "A Live DevOps Demo Project",
      link: "https://devops-proj.vercel.app/",
      image: getAssetPath("/images/devops.png"),
    },
  ];
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter a website name"
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>
      <div className="blog scroll overflow-auto max-h-[400px] max-w-[800px]">
        <h2>Top Sites</h2>
        <div className="flex flex-wrap items-center justify-center gap-10 mb-4">
          {sites.map((site) => (
            <a
              href={site.link}
              key={site.id}
              alt={site.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center gap-2">
                <img
                  src={site.image}
                  alt={site.name}
                  className="aspect-auto h-38 rounded-lg"
                />
                <p>{site.name}</p>
              </div>
            </a>
          ))}
        </div>
        <h2>Blogs</h2>
        <p className="text-center text-gray-600 text-lg">Coming Soon...</p>
      </div>
    </>
  );
}

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;

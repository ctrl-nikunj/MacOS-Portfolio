import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import useThemeStore from "@/store/theme";
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
  const { theme } = useThemeStore();
  const sites = [
    {
      id: 1,
      name: "Endless Horse",
      link: "http://endless.horse/",
      image: getAssetPath("/images/horse.jpg"),
    },
    {
      id: 2,
      name: "Steganography",
      link: "https://itws-mern.vercel.app",
      image: getAssetPath("/images/itws.png"),
    },
  ];
  const blog = [
    {
      id: 1,
      name: "MacOS Portfolio",
      link: "https://nikunj-blog.vercel.app/post/2c09220e-995f-812d-a62f-ecdc2bb59e16",
      image: getAssetPath("/images/macos.png"),
    },
    {
      id: 2,
      name: "Welcome",
      link: "https://nikunj-blog.vercel.app/post/2c09220e-995f-8165-8161-eb6be2d33662",
      image: getAssetPath("/images/welcome.png"),
    },
  ];
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
        <WindowControls target="safari" />
        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div
            className={`search ${
              theme === "dark" ? "bg-zinc-400 border-zinc-500" : ""
            } transition-colors duration-400`}
          >
            <Search
              className={`icon ${
                theme === "dark" ? "text-zinc-200" : ""
              } transition-colors duration-400`}
            />
            <input
              type="text"
              placeholder="Search or enter a website name"
              className={`flex-1 ${
                theme === "dark" ? "placeholder:text-zinc-200" : ""
              } transition-colors duration-400`}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>
      <div
        className={`blog scroll overflow-auto max-h-[400px] max-w-[800px] ${
          theme === "dark" ? "bg-zinc-700" : ""
        } transition-colors duration-400`}
      >
        <h2
          className={
            (theme === "dark" ? "text-zinc-200" : "") +
            " transition-colors duration-400"
          }
        >
          Top Sites
        </h2>
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
                  className="h-38 rounded-lg shadow-lg"
                />
                <p
                  className={
                    (theme === "dark" ? "text-zinc-200" : "") +
                    " transition-colors duration-400"
                  }
                >
                  {site.name}
                </p>
              </div>
            </a>
          ))}
        </div>
        <h2
          className={
            (theme === "dark" ? "text-zinc-200" : "") +
            " transition-colors duration-400"
          }
        >
          Blogs
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10 mb-4">
          {blog.map((site) => (
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
                  className="h-38 rounded-lg shadow-lg"
                />
                <p
                  className={
                    (theme === "dark" ? "text-zinc-200" : "") +
                    " transition-colors duration-400"
                  }
                >
                  {site.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;

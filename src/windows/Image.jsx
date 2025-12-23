import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import useWindowStore from "@/store/window";
import useThemeStore from "@/store/theme";

function Image() {
  const { windows } = useWindowStore();
  const { theme } = useThemeStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;
  const { name, imageUrl } = data;
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
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>
      <div
        className={
          (theme === "dark"
            ? "p-5 space-y-6 bg-zinc-700"
            : "p-5 space-y-6 bg-white") + " transition-colors duration-400"
        }
      >
        <img src={imageUrl} alt={name} className="rounded" />
      </div>
    </>
  );
}

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;

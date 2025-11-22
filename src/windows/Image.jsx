import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import useWindowStore from "@/store/window";

function Image() {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;
  const { name, imageUrl } = data;
  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-5 space-y-6 bg-white">
        <img src={imageUrl} alt={name} className="rounded"/>
      </div>
    </>
  );
}

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;

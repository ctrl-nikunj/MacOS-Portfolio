import WindowWrapper from "@/hoc/WindowWrapper";
import WindowControls from "@/components/WindowControls";
import useWindowStore from "@/store/window";
import useThemeStore from "@/store/theme";

function Text() {
  const { windows } = useWindowStore();
  const { theme } = useThemeStore();
  const data = windows?.txtfile?.data;

  if (!data) return null;
  const { name, image, subtitle, description } = data;
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
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div
        className={
          (theme === "dark"
            ? "p-5 space-y-6 bg-zinc-700 scroll overflow-y-auto h-[350px]"
            : "p-5 space-y-6 bg-white scroll overflow-y-auto h-[350px]") +
          " transition-colors duration-400"
        }
      >
        {image ? (
          <div className="w-full">
            <img
              src={image}
              alt={name}
              className="h-auto w-full aspect-auto rounded"
            />
          </div>
        ) : null}

        {subtitle ? (
          <h3
            className={
              (theme === "dark"
                ? "text-lg font-semibold font-fira tracking-wider text-white"
                : "text-lg font-semibold font-fira tracking-wider text-black") +
              " transition-colors duration-400"
            }
          >
            {subtitle}
          </h3>
        ) : null}

        {Array.isArray(description) && description.length > 0 ? (
          <div
            className={
              (theme === "dark"
                ? "space-y-3 leading-relaxed text-base text-gray-200 font-fira"
                : "space-y-3 leading-relaxed text-base text-gray-800 font-fira") +
              " transition-colors duration-400"
            }
          >
            {description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
}

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;

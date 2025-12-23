import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import { socials } from "@/constants";
import { getAssetPath } from "@/utils/helpers";
import useThemeStore from "@/store/theme";

function Contact() {
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
        <WindowControls target="contacts" />
        <h2>Contact</h2>
      </div>
      <div className="p-5 space-y-5 ">
        <img
          src={getAssetPath("/images/Profile.jpg")}
          alt="That's me!"
          className="rounded-full w-20 h-20"
        />

        <h3
          className={
            (theme === "dark"
              ? "font-fira tracking-wider text-white"
              : "font-fira tracking-wider text-black") +
            " transition-colors duration-400"
          }
        >
          Hey!! Let's Connect..
        </h3>
        <p
          className={
            (theme === "dark"
              ? "font-fira text-white"
              : "font-fira text-gray-800") + " transition-colors duration-400"
          }
        >
          Building something? Breaking something? Curious about something? Let’s
          chat.
        </p>
        <ul>
          {socials.map(({ id, text, icon, bg, link }) => (
            <li key={id} className={bg}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const ContactWindow = WindowWrapper(Contact, "contacts");

export default ContactWindow;

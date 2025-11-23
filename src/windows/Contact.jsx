import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import { socials } from "@/constants";
import { getAssetPath } from "@/utils/helpers";

function Contact() {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contacts" />
        <h2>Contact</h2>
      </div>
      <div className="p-5 space-y-5 ">
        <img
          src={getAssetPath("/images/Profile.jpg")}
          alt="That's me!"
          className="rounded-full w-20 h-20"
        />

        <h3>Hey!! Let's Connect..</h3>
        <p>
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

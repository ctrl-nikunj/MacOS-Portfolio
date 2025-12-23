import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import useThemeStore from "@/store/theme";
import { Check, Flag } from "lucide-react";

function Terminal() {
  const techStack = [
    {
      category: "Frontend",
      items: ["Next.js", "React.js", "TypeScript", "JavaScript"],
    },
    { category: "Backend", items: ["Node.js", "Express.js, Bun, Elysia"] },
    { category: "Database", items: ["MongoDB", "MySQL", "PostgreSQL"] },
    { category: "Styling", items: ["TailwindCSS", "Bootstrap", "CSS, ShadCN"] },
    { category: "Version Control", items: ["Git", "GitHub"] },
    {
      category: "Dev Tools",
      items: ["VS Code", "Postman", "Docker, Antigravity"],
    },
  ];

  const { theme } = useThemeStore();

  return (
    <>
      <div
        id="window-header"
        className={`${
          theme === "dark"
            ? "bg-zinc-600 border-b border-zinc-600"
            : "bg-white border-b border-zinc-200"
        } transition-colors duration-400`}
      >
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>
      <div className="techstack">
        <p>
          <span
            className={
              (theme === "dark" ? "text-white" : "text-black") +
              " transition-colors duration-400"
            }
          >
            @nikunj %{" "}
          </span>
          <span
            className={
              (theme === "dark" ? "text-white" : "text-black") +
              " transition-colors duration-400"
            }
          >
            show tech stack
          </span>
        </p>
        <div className={`label ${theme === "dark" ? "dark" : "light"}`}>
          <p
            className="w-32 transition-colors duration-400"
            style={{ color: theme === "dark" ? "white" : "black" }}
          >
            Categories
          </p>
          <p
            style={{ color: theme === "dark" ? "white" : "black" }}
            className="transition-colors duration-400"
          >
            Technologies
          </p>
        </div>

        <ul
          className={`content ${
            theme === "dark" ? "border-zinc-500" : ""
          } transition-colors duration-400`}
        >
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center gap-1">
              <Check className="check" size={20} />
              <h3
                className={
                  (theme === "dark" ? "text-green-500" : "") +
                  " transition-colors duration-400"
                }
              >
                {category}
              </h3>
              <ul>
                {items.map((item, i) => (
                  <li
                    key={i}
                    className={
                      (theme === "dark" ? "text-white" : "text-black") +
                      " transition-colors duration-400"
                    }
                  >
                    {item}
                    {i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="footnote">
          <p>
            <Check size={20} />{" "}
            <span
              className={
                (theme === "dark" ? "text-green-500" : "") +
                " transition-colors duration-400"
              }
            >
              5 of 5 Stacks rendered (100%)
            </span>
          </p>
          <p
            style={{ color: theme === "dark" ? "white" : "black" }}
            className="transition-colors duration-400"
          >
            <Flag size={15} fill="black" /> Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
}

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;

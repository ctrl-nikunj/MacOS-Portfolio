import dayjs from "dayjs";

export default function Navbar() {
  const data = [
    { id: 1, name: "Portfolio" },
    { id: 2, name: "Contact" },
    { id: 3, name: "Projects" },
  ];

  const navIcons = [
      { id: 3, icon: "/icons/wifi.svg" },
      { id: 2, icon: "/icons/search.svg" },
      { id: 4, icon: "/icons/user.svg" },
      { id: 1, icon: "/icons/mode.svg" },
  ];
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" />
        <p className="font-semibold">Nikunj's Portfolio</p>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
            {navIcons.map((item) => (
                <li key={item.id}>
                    <img src={item.icon} className="icon-hover" alt={`icon-${item.id}`} />
                </li>
            ))}
        </ul>
        <time>
            {dayjs().format("ddd MMM D h:MM A")}
        </time>
      </div>
    </nav>
  );
}

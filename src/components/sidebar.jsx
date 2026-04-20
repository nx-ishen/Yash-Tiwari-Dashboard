const Sidebar = () => {
  const items = [
    { name: "Dashboard", id: "dashboard" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-64 h-screen p-6 bg-white/5 backdrop-blur-xl border-r border-white/10 sticky top-0 flex flex-col">
      
      <h1 className="text-3xl font-extrabold mb-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Yash.dev
      </h1>

      <ul className="space-y-4 flex-1">
        {items.map(item => (
          <li
            key={item.id}
            onClick={() => scroll(item.id)}
            className="cursor-pointer px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition"
          >
            {item.name}
          </li>
        ))}
      </ul>

      <p className="text-xs text-gray-500 text-center">© 2026</p>
    </div>
  );
};

export default Sidebar;
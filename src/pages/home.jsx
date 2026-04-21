import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 h-screen p-6 bg-white/5 backdrop-blur-xl border-r border-white/10 sticky top-0 flex-col shrink-0">
        <h1 className="text-3xl font-extrabold mb-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Yash.dev
        </h1>
        <ul className="space-y-2 flex-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `block cursor-pointer px-4 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-white/15 text-white font-semibold"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <p className="text-xs text-gray-500 text-center">© 2026 Yash Tiwari</p>
      </aside>

      {/* Mobile Top Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 px-5 py-4 flex items-center justify-between">
        <h1 className="text-xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Yash.dev
        </h1>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 right-0 z-40 bg-black/90 backdrop-blur-xl border-b border-white/10 py-4 px-5">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block w-full text-left px-4 py-2 rounded-lg transition ${
                      isActive
                        ? "bg-white/15 text-white font-semibold"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Page Content */}
      <main className="flex-1 p-4 md:p-10 overflow-y-auto pt-20 md:pt-10">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Home;
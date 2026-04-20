import Sidebar from "../components/sidebar";
import Dashboard from "../sections/dashboard";
import About from "../sections/about";
import Skills from "../sections/skills";
import Projects from "../sections/project";
import Contact from "../sections/contact";

const Home = () => {
  return (
    <div className="flex min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10 overflow-y-auto">
        <div className="space-y-28 max-w-7xl mx-auto">

          <div id="dashboard"><Dashboard /></div>
          <div id="about"><About /></div>
          <div id="skills"><Skills /></div>
          <div id="projects"><Projects /></div>
          <div id="contact"><Contact /></div>

        </div>
      </div>
    </div>
  );
};

export default Home;
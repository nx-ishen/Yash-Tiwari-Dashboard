import { useNavigate } from "react-router-dom";
import GlassCard from "../components/glasscard";
import Analytics from "../components/analytics";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 md:space-y-10">
      {/* Hero */}
      <GlassCard className="relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/30 blur-[120px]"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-blue-500/20 blur-[100px]"></div>
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Yash Tiwari{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Premium Dashboard
            </span>
          </h2>
          <p className="text-gray-300 mt-3 text-base md:text-lg">
            Frontend Developer building modern web experiences.
          </p>
          <button
            onClick={() => navigate("/projects")}
            className="mt-5 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-pointer text-sm md:text-base"
          >
            Explore Work
          </button>
        </div>
      </GlassCard>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {["5+ Projects", "React", "Responsive"].map((item, i) => (
          <GlassCard key={i} className="text-center py-4">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-400">{item}</h3>
          </GlassCard>
        ))}
      </div>

      {/* Analytics */}
      <Analytics />
    </div>
  );
};

export default Dashboard;
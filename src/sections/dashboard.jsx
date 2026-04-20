import GlassCard from "../components/glasscard";
import Analytics from "../components/analytics"; // Import the new chart

const Dashboard = () => {
  return (
    <div className="space-y-10">
      
      {/* --- Existing Hero Section --- */}
      <GlassCard className="relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/30 blur-[120px]"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-blue-500/20 blur-[100px]"></div>

        <div className="relative z-10">
          <h2 className="text-6xl font-extrabold">
            Yash Tiwari <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Premium Dashboard</span>
          </h2>

          <p className="text-gray-300 mt-4 text-lg">
            Frontend Developer building modern web experiences.
          </p>

          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 cursor-pointer"
          >
            Explore Work
          </button>
        </div>
      </GlassCard>

      {}
      <div className="grid md:grid-cols-3 gap-6">
        {["5+ Projects", "React", "Responsive"].map((item, i) => (
          <GlassCard key={i} className="text-center">
            <h3 className="text-3xl font-bold text-purple-400">{item}</h3>
          </GlassCard>
        ))}
      </div>

      {/* --- NEW: Analytics Section --- */}
      <Analytics />

    </div>
  );
};

export default Dashboard;
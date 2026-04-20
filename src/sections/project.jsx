import { projectsData } from "../data/project";
import GlassCard from "../components/glasscard";

const Projects = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map(project => (
          <GlassCard key={project.id} className="relative overflow-hidden flex flex-col">

            {/* FIX 1: pointer-events-none add kiya taaki yeh background clicks ko block na kare */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition pointer-events-none"></div>

            {/* FIX 2: Content ko relative z-10 mein wrap kiya jisse buttons hamesha clickable rahein */}
            <div className="relative z-10 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 flex-1">{project.desc}</p>

              <div className="flex gap-2 mt-4">
                
                {/* Live Button: Sirf tabhi dikhega jab link majood ho aur wo "#" na ho */}
                {project.liveLink && project.liveLink !== "#" && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 font-medium hover:opacity-90 transition cursor-pointer"
                  >
                    Live
                  </a>
                )}
                
                {/* Code Button: Sirf tabhi dikhega jab link majood ho aur wo "#" na ho */}
                {project.githubLink && project.githubLink !== "#" && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded bg-white/10 hover:bg-white/20 transition cursor-pointer"
                  >
                    Code
                  </a>
                )}

              </div>
            </div>
            
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
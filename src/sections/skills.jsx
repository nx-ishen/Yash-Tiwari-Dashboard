import { skillsData } from "../data/skills";
import GlassCard from "../components/glasscard";

const Skills = () => {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {skillsData.map((skill, i) => (
          <GlassCard key={i}>
            <div className="flex justify-between mb-2 text-sm md:text-base">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded overflow-hidden">
              <div
                className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded"
                style={{ width: skill.level }}
              />
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
import GlassCard from "../components/glasscard";

const About = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
      <GlassCard>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Results-driven Front-End Web Developer and BCA student at Integral University, Lucknow.
          Proficient in HTML5, CSS3, JavaScript, React, Vite, and WordPress, with hands-on experience
          delivering fully responsive, accessible web applications. Adept at version control with
          Git/GitHub, CI/CD pipelines, and cloud deployment via Vercel. Committed to writing clean,
          maintainable code and continuously expanding technical expertise.
        </p>
      </GlassCard>
    </div>
  );
};

export default About;
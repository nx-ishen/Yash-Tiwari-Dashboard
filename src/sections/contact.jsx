import GlassCard from "../components/glasscard";

const Contact = () => {
  return (
    <GlassCard>
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <p className="text-gray-300 mb-6">
        Let’s connect and build something great.
      </p>

      <div className="flex flex-col gap-4">

        {/* Email */}
        <a
          href="mailto:yashtiwari2160@gmail.com"
          className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition"
        >
          📧 <span>Email Me</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yash-tiwari-2160mail/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-105 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)] transition-all duration-300 border border-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452H17.21v-5.569c0-1.328-.025-3.036-1.849-3.036-1.851 0-2.134 1.445-2.134 2.939v5.666H9.092V9h3.112v1.561h.045c.434-.82 1.494-1.684 3.074-1.684 3.287 0 3.894 2.164 3.894 4.977v6.598zM5.337 7.433a1.807 1.807 0 110-3.613 1.807 1.807 0 010 3.613zM6.918 20.452H3.756V9h3.162v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.728C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/nx-ishen"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-105 hover:border-gray-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 border border-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>

      </div>
    </GlassCard>
  );
};

export default Contact;
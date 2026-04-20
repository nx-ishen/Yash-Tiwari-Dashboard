const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-500 ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
// src/components/AcademicPortal/AcademicCard.jsx
import { motion } from 'framer-motion';

const AcademicCard = ({ title, icon, image, description, color, active, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${
        active ? 'ring-4 ring-white/50' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative h-full">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${color} opacity-80`} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm">{description}</p>

          
          {/* Active Indicator */}
          {active && (
            <div className="mt-auto pt-4">
              <div className="w-full bg-white/30 h-1 rounded-full">
                <div className="bg-white h-1 rounded-full animate-pulse" />
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Glow Effect */}
      {active && (
        <div className="absolute inset-0 bg-white/10 rounded-xl pointer-events-none animate-pulse" />
      )}
    </motion.div>
  );
};

export default AcademicCard;
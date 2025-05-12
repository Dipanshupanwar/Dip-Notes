import { motion } from 'framer-motion';
import Features from './Features';


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center  px-4 sm:px-6 lg:px-8 "  >
   
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
              delayChildren: 0.2,
            },
          },
        }}
        className="w-full max-w-4xl text-center"
      >
        {/* Welcome to */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <h1 className="text-base sm:text-lg md:text-4xl text-purple-600 mb-4 font-medium">
            Welcome to
          </h1>
        </motion.div>

        {/* Din Notes */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            Dip Notes
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <p className="text-sm sm:text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed">
            Ultimate Academic, Career, and Personal Growth Platform for{" "}
            <span className="text-blue-500 font-semibold">RGPV Students</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

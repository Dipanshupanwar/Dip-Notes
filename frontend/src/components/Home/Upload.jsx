import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Upload() {
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    const fetchStudentCount = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/users`);
        const data = await response.json();
        setStudentCount(data.length); // assuming response is an array
      } catch (error) {
        console.error('Failed to fetch students:', error);
      }
    };

    fetchStudentCount();
  }, []);

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" },
    tap: { scale: 0.95 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const buttons = [
    { text: 'Get Started', path: '/signup' },
    { text: 'Upload Notes', path: '/uploadform/notesupload' },
    { text: 'Upload Paper', path: '/uploadform/papersupload' },
    { text: 'Upload Lab', path: '/uploadform/lab-recorduploads' },
    { text: `${studentCount}+ Students`, isCount: true }
  ];

  return (
    <>
      <div className="h-[50vh] flex flex-col items-center justify-center p-3">
        <motion.h3 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-white max-w-4xl mb-12 text-center leading-relaxed"
        >
   At Dip Notes , I am committed to fostering a dynamic learning environment, and my website is your gateway to a world of educational resources and support. Whether you're a student seeking course materials, a researcher exploring the latest findings, or a job-seeker looking to craft the perfect resume, I've got you covered.        </motion.h3>

        <motion.div 
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {buttons.map((btn, index) => (
            btn.isCount ? (
              <motion.button
                key={index}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-6 py-3 rounded-lg font-medium text-white bg-purple-600 hover:bg-purple-700 shadow-md transform duration-200"
              >
                {btn.text}
              </motion.button>
            ) : (
              <Link to={btn.path} key={index}>
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="px-6 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 shadow-md transform duration-200"
                >
                  {btn.text}
                </motion.button>
              </Link>
            )
          ))}
        </motion.div>
      </div>

      {/* Bottom Lines */}
      <div className="py-6">
        <div className="h-1 w-[90%] bg-white mx-auto"></div>
        <div className="h-1 w-[90%] bg-white mt-2 mx-auto"></div>
      </div>
    </>
  );
}

export default Upload;

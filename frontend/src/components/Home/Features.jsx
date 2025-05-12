import React from 'react';

const features = [
  {
    title: 'Notes',
    description: 'Discover comprehensive notes on a wide range of subjects, meticulously crafted to support your academic journey. Our notes are designed to simplify complex topics, making them easier to understand and remember. Whether you are preparing for exams or catching up on missed classes, our extensive collection of study materials ensures you have everything you need to succeed. Stay organized and enhance your learning experience with Vipin Notes'
  },
  {
    title: 'Labs',
    description: 'Access detailed lab manuals and experiment guides that provide step-by-step instructions and explanations for various practical sessions. Our lab resources are tailored to complement your theoretical knowledge, ensuring you gain hands-on experience and a deeper understanding of your coursework. From programming labs to science experiments, our materials help you perform experiments accurately and efficiently.',
  },
  {
    title: 'PYQ',
    description: 'Prepare effectively for your exams with our repository of previous year questions. Analyzing past exam papers is a proven strategy to understand exam patterns, frequently asked questions, and important topics. Our PYQ collection spans multiple subjects and courses, providing you with ample practice material to test your knowledge and improve your problem-solving skills. Stay ahead of the curve with Vipin Notes.',
  },
  {
    title: 'CGPA Calculator',
    description: 'Calculate your CGPA effortlessly with our user-friendly CGPA calculator. Input your grades and credits for each course, and our tool will provide an accurate calculation of your cumulative grade point average. This feature helps you track your academic progress and set realistic goals for improvement. Stay informed about your academic standing and plan your studies effectively with our CGPA calculator..',
  },
  {
    title: 'E Books',
    description: 'Explore our extensive collection of e-books across various subjects and disciplines. Our e-books provide in-depth knowledge and insights, making them an excellent resource for both study and research. Easily accessible and downloadable, these digital books are perfect for learning on the go. Expand your knowledge base and enhance your academic performance with our curated selection of e-books.',
  },
  {
    title: 'Alumni Network',
    description: 'Join our vibrant alumni Join our vibrant alumni network to connect with former students who are now industry professionals. Benefit from their experience and insights through mentorship, career advice, and networking opportunities. Our alumni network is a valuable resource for guidance on job placements, industry trends, and professional growth. Build meaningful connections that can support your career aspirations and open doors to new opportunities. to connect with former students turned professionals...',
  },
  {
    title: 'Resume Builder',
    description: 'Create a Create a standout resume with our easy-to-use resume builder. Our tool guides you through the process of crafting a professional and polished resume that highlights your skills, achievements, and experiences. With customizable templates and expert tips, you can ensure your resume makes a strong impression on potential employers. Take the first step towards your dream job with a well-crafted resume from Vipin Notes. resume with our easy-to-use builder...',
  },
  {
    title: 'Frontend Compiler',
    description: 'Test and Test and showcase your HTML, CSS, and JavaScript code with our online frontend compiler. Our platform allows you to write, compile, and debug code snippets in real-time, providing instant feedback on your work. Whether you are practicing coding skills or working on a project, our compiler offers a seamless and interactive environment to develop and refine your frontend development capabilities. Enhance your coding proficiency with Vipin Notes. your HTML, CSS, and JavaScript code with our online compiler...',
  },
  {
    title: 'Coding Bot',
    description: 'Practice DSA with Enhance your coding skills with our interactive Telegram bot designed for Data Structures and Algorithms (DSA) practice. Receive daily coding challenges, solutions, and explanations to sharpen your problem-solving abilities. Our bot provides a convenient and engaging way to learn and practice coding on-the-go. Stay consistent with your coding practice and prepare for technical interviews with the help of our coding bot. Telegram bot. Get daily coding challenges, solutions, and explanations...',
  },
];

const Features = () => {
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 19;

    card.style.transform = `rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg)`;
  };

  const resetTransform = (card) => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Features</h2>
        <p className="mt-2 text-gray-600">Explore what Vipin Notes offers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group rounded-2xl shadow-lg p-6 hover:bg-indigo-100 transition duration-300 perspective"
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => resetTransform(e.currentTarget)}
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.2s ease',
              cursor: 'pointer',
            }}
          >
            <h3 className="text-xl font-semibold text-indigo-600 group-hover:text-indigo-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-white group-hover:text-black text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

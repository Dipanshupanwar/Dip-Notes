// src/pages/Academics.jsx
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Academiccards from '../components/AcademicPortal/Academiccards';
import { useNavigate } from 'react-router-dom';


const Academicspage = () => {

    const navigate = useNavigate(); 
    const [activeTab, setActiveTab] = useState('notes');

    const academicOptions = [
        { id: 'notes', title: 'Notes', icon: '📝', description: " Our extensive notes repository is designed to be your ultimate study companion. Dive into a wealth of lecture notes, handouts, and study materials, meticulously curated to cover every aspect of your courses. Whether you're revising for an exam, working on an assignment, or simply expanding your knowledge, you'll find these notes invaluabl", image: "/src/assets/notes.6c550773947978b22fc6.png" },
        { id: 'papers', title: 'Previous Papers', icon: '📄', description: " Preparing for exams has never been more effective. Gain a competitive edge with access to previous year's exam papers, a valuable resource for every student. By practicing with real exam questions, you'll not only get a feel for the format but also identify key topics and trends in your curriculum.", image: "/src/assets/papers.webp" },
        { id: 'labs', title: 'Lab Manuals', icon: '🔬', description: "Welcome to our interactive labs section, where learning goes beyond textbooks. Here, you can immerse yourself in hands-on learning experiences that bridge the gap between theory and practice. Our labs offer a variety of experiments, simulations, and practical exercises to reinforce your understanding of complex concepts. ", image: "/src/assets/labs.webp" },
        { id: 'books', title: 'Reference Books', icon: '📚', description: "Books are curated to provide you with in-depth knowledge and insights, making your studies even more enriching. Whether you're preparing for exams, aiming to deepen your understanding of a subject, or simply expanding your horizons, our website is your go-to destination. ", image: "/src/assets/books.webp" },
        { id: 'calc', title: 'CGPA Calculator', icon: '🧮', description: "A student's CGPA significantly influences their career prospects. A high CGPA opens doors to prestigious job placements, with many employers equating it to dedication and consistency. It showcases a strong work ethic and the ability to meet deadlines, qualities highly sought after in the professional world. It also acts as a key factor for postgraduate admissions in renowned institutions. In essence, CGPA isn't just a metric; it's a critical factor in realizing one's academic and professional aspirations. ", image: "/src/assets/CGPA.webp" },
    ];

    return (

        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900
      relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.8)_0%,_rgba(30,58,138,0.9)_50%,_#000_100%)]">
         
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-12">
                    Academic Resources
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {academicOptions.map((option) => (
                        <Academiccards
                            key={option.id}
                            title={option.title}
                            icon={option.icon}
                            image={option.image}
                            description={option.description}
                            color={option.color}
                            active={activeTab === option.id}
                            onClick={() => { setActiveTab(option.id);
                                navigate(`/${option.id}`);
                             } }
                        />
                    ))}
                </div>

                <div className="mt-12 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-white/10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Academicspage;
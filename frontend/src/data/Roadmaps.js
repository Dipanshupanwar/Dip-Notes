export const roadmapData = {
    webdev: {
      title: "Web Development Roadmap",
      image: "/images/roadmaps/webdev.jpg",
      description: "Complete guide to becoming a web developer in 2024",
      levels: [
        {
          title: "Beginner",
          skills: ["HTML5", "CSS3", "JavaScript Basics", "Git & GitHub"],
          resources: ["MDN Web Docs", "FreeCodeCamp"],
          duration: "2-3 months"
        },
        {
          title: "Intermediate",
          skills: ["React.js", "Node.js", "Express", "MongoDB"],
          resources: ["The Odin Project", "Fullstack Open"],
          duration: "4-6 months"
        },
        {
          title: "Advanced",
          skills: ["TypeScript", "GraphQL", "Docker", "CI/CD", "AWS"],
          resources: ["Frontend Masters", "CodeWithMosh"],
          duration: "6+ months"
        }
      ],
      pdfUrl: "/resources/webdev-roadmap.pdf"
    },
  
    android: {
      title: "Android Development Roadmap",
      image: "/images/roadmaps/android.jpg",
      description: "Step-by-step guide to Android app development",
      levels: [
        {
          title: "Beginner",
          skills: ["Kotlin Basics", "Android Studio", "UI/UX Fundamentals"],
          resources: ["Android Developers Docs", "Kotlin Koans"],
          duration: "2-3 months"
        },
        {
          title: "Intermediate",
          skills: ["Jetpack Compose", "Room DB", "MVVM Architecture", "API Integration"],
          resources: ["Android Codelabs", "Kotlin Coroutines Guide"],
          duration: "4-6 months"
        },
        {
          title: "Advanced",
          skills: ["Firebase", "Unit Testing", "Dependency Injection", "Performance Optimization"],
          resources: ["RayWenderlich Android", "Advanced Android in Kotlin"],
          duration: "6+ months"
        }
      ],
      pdfUrl: "/resources/android-roadmap.pdf"
    },
  
    fullstack: {
      title: "Full Stack Development Roadmap",
      image: "/images/roadmaps/fullstack.jpg",
      description: "Master both front-end and back-end development",
      levels: [
        {
          title: "Beginner",
          skills: ["HTML", "CSS", "JavaScript", "Version Control"],
          resources: ["FreeCodeCamp", "The Odin Project"],
          duration: "2-3 months"
        },
        {
          title: "Intermediate",
          skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
          resources: ["Fullstack Open", "Traversy Media"],
          duration: "4-6 months"
        },
        {
          title: "Advanced",
          skills: ["Next.js", "TypeScript", "GraphQL", "Docker", "AWS/GCP"],
          resources: ["Frontend Masters", "The Net Ninja"],
          duration: "6+ months"
        }
      ],
      pdfUrl: "/resources/fullstack-roadmap.pdf"
    },
  
    datascience: {
      title: "Data Science Roadmap",
      image: "/images/roadmaps/datascience.jpg",
      description: "Learn to analyze data and extract insights",
      levels: [
        {
          title: "Beginner",
          skills: ["Python Basics", "NumPy", "Pandas", "Data Cleaning"],
          resources: ["Kaggle Courses", "DataCamp"],
          duration: "2-3 months"
        },
        {
          title: "Intermediate",
          skills: ["Data Visualization", "Matplotlib", "Seaborn", "Statistics"],
          resources: ["Coursera - IBM DS", "Kaggle Projects"],
          duration: "3-5 months"
        },
        {
          title: "Advanced",
          skills: ["Machine Learning", "Model Evaluation", "Feature Engineering"],
          resources: ["Fast.ai", "Hands-on ML by Aurélien Géron"],
          duration: "6+ months"
        }
      ],
      pdfUrl: "/resources/datascience-roadmap.pdf"
    },
  
    ml: {
      title: "Machine Learning Roadmap",
      image: "/images/roadmaps/ml.jpg",
      description: "Build intelligent systems with ML",
      levels: [
        {
          title: "Beginner",
          skills: ["Linear Algebra", "Python", "Scikit-learn"],
          resources: ["Coursera Andrew Ng", "Kaggle"],
          duration: "2-3 months"
        },
        {
          title: "Intermediate",
          skills: ["Supervised & Unsupervised Learning", "Model Evaluation"],
          resources: ["Hands-on ML Book", "Google ML Crash Course"],
          duration: "4-6 months"
        },
        {
          title: "Advanced",
          skills: ["Deep Learning", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
          resources: ["DeepLearning.ai", "Fast.ai"],
          duration: "6+ months"
        }
      ],
      pdfUrl: "/resources/ml-roadmap.pdf"
    },
  
    ai: {
      title: "Artificial Intelligence Roadmap",
      image: "/images/roadmaps/ai.jpg",
      description: "Explore the world of intelligent agents and systems",
      levels: [
        {
          title: "Beginner",
          skills: ["Python", "Logic & Reasoning", "Search Algorithms"],
          resources: ["CS50 AI", "Introduction to AI - Udacity"],
          duration: "3 months"
        },
        {
          title: "Intermediate",
          skills: ["NLP Basics", "Neural Networks", "Reinforcement Learning"],
          resources: ["MIT AI Course", "DeepLearning.ai Specialization"],
          duration: "5-7 months"
        },
        {
          title: "Advanced",
          skills: ["GANs", "Transformers", "AI Ethics", "Prompt Engineering"],
          resources: ["Stanford CS221", "Papers with Code"],
          duration: "6+ months"
        }
      ],
      pdfUrl: "/resources/ai-roadmap.pdf"
    },
  
    cyber: {
      title: "Cyber Security Roadmap",
      image: "/images/roadmaps/cyber.jpg",
      description: "Protect systems, networks, and data from cyber threats",
      levels: [
        {
          title: "Beginner",
          skills: ["Networking Basics", "Linux Commands", "Security Fundamentals"],
          resources: ["TryHackMe", "HackTheBox Academy"],
          duration: "2-3 months"
        },
        {
          title: "Intermediate",
          skills: ["Vulnerability Scanning", "Firewalls", "Wireshark"],
          resources: ["Cybrary", "CompTIA Security+"],
          duration: "4-5 months"
        },
        {
          title: "Advanced",
          skills: ["SIEM", "Penetration Testing", "Red/Blue Teaming"],
          resources: ["Offensive Security", "OSCP Training"],
          duration: "6+ months"
        }
      ],
      pdfUrl: "/resources/cyber-roadmap.pdf"
    },
  
    network: {
      title: "Network Security Roadmap",
      image: "/images/roadmaps/network.jpg",
      description: "Secure networks and prevent intrusions",
      levels: [
        {
          title: "Beginner",
          skills: ["TCP/IP", "OSI Model", "Basic Protocols"],
          resources: ["Cisco Networking Basics", "CompTIA Network+"],
          duration: "2 months"
        },
        {
          title: "Intermediate",
          skills: ["Firewall Configuration", "VPNs", "IDS/IPS"],
          resources: ["Cybrary", "Fortinet Academy"],
          duration: "3-4 months"
        },
        {
          title: "Advanced",
          skills: ["Network Monitoring", "Threat Hunting", "Zero Trust"],
          resources: ["NetworkChuck", "Cisco CCNA/CCNP"],
          duration: "5+ months"
        }
      ],
      pdfUrl: "/resources/network-roadmap.pdf"
    },
  
    hacking: {
      title: "Ethical Hacking Roadmap",
      image: "/images/roadmaps/hacking.jpg",
      description: "Ethically hack systems to find vulnerabilities",
      levels: [
        {
          title: "Beginner",
          skills: ["Linux Basics", "Networking", "Reconnaissance"],
          resources: ["TryHackMe", "HackTheBox"],
          duration: "2-3 months"
        },
        {
          title: "Intermediate",
          skills: ["Metasploit", "Burp Suite", "Privilege Escalation"],
          resources: ["CEH", "Tiberius YouTube"],
          duration: "4-6 months"
        },
        {
          title: "Advanced",
          skills: ["Buffer Overflow", "Exploit Development", "OSCP Prep"],
          resources: ["Offensive Security", "PentesterLab"],
          duration: "6+ months"
        }
      ],
      pdfUrl: "/resources/hacking-roadmap.pdf"
    },
  
    testing: {
      title: "Software Testing Roadmap",
      image: "/images/roadmaps/testing.jpg",
      description: "Ensure software quality with manual and automation testing",
      levels: [
        {
          title: "Beginner",
          skills: ["Manual Testing", "Bug Reporting", "SDLC/STLC"],
          resources: ["Guru99", "Software Testing Help"],
          duration: "1-2 months"
        },
        {
          title: "Intermediate",
          skills: ["Selenium", "JUnit", "API Testing"],
          resources: ["Test Automation University", "Tools QA"],
          duration: "3-4 months"
        },
        {
          title: "Advanced",
          skills: ["CI/CD Testing", "Performance Testing", "Security Testing"],
          resources: ["JMeter", "Postman", "Snyk"],
          duration: "5+ months"
        }
      ],
      pdfUrl: "/resources/testing-roadmap.pdf"
    },
  
    placement: {
      title: "Placement Preparation Roadmap",
      image: "/images/roadmaps/placement.jpg",
      description: "Crack interviews with the right preparation",
      levels: [
        {
          title: "Beginner",
          skills: ["C/C++/Java Basics", "DSA - Arrays & Strings", "Time Complexity"],
          resources: ["GeeksforGeeks", "Love Babbar Sheet"],
          duration: "2 months"
        },
        {
          title: "Intermediate",
          skills: ["OOPs", "Trees", "Graphs", "DBMS", "OS Basics"],
          resources: ["Striver DSA", "CS Core YouTube"],
          duration: "3-4 months"
        },
        {
          title: "Advanced",
          skills: ["System Design", "HR Prep", "Mock Interviews"],
          resources: ["Scaler Academy", "Design Gurus"],
          duration: "5+ months"
        }
      ],
      pdfUrl: "/resources/placement-roadmap.pdf"
    }
  };
  
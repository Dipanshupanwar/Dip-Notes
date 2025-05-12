import SemesterDrive from '../components/SemesterDrive';

const LabsPage = () => {
  const LabsLinks = [
    { name: "Sem 1", link: "https://drive.google.com/sem1" },
    { name: "Sem 2", link: "https://drive.google.com/sem2" },
    { name: "Sem 3", link: "https://drive.google.com/sem3" },
    { name: "Sem 4", link: "https://drive.google.com/sem4" },
    { name: "Sem 5", link: "https://drive.google.com/sem5" },
    { name: "Sem 6", link: "https://drive.google.com/sem6" },
    { name: "Sem 7", link: "https://drive.google.com/sem7" },
    { name: "Sem 8", link: "https://drive.google.com/sem8" },
  ];

  return (
    <SemesterDrive 
      title="Labs Section" 
      semesterLinks={LabsLinks}
      uploadPath="/upload"  // this is your internal route
    />
  );
};

export default LabsPage;

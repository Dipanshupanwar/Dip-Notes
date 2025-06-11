import React, { useEffect, useState } from "react";
import axios from "axios";

const Ebookspage = () => {
  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/ebooks/all")
      .then((res) => setEbooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">E-books Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ebooks.map((book) => (
          <div key={book._id} className="border p-4 rounded shadow">
            <img src={book.coverImageUrl} alt={book.title} className="w-full h-48 object-cover mb-2" />
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-500">{book.author}</p>
               {console.log("here is url",book.pdfUrl)}
         <a
  href={book.pdfUrl}
  download
  target="_blank"
  rel="noreferrer"
  className="text-blue-400 underline block mb-2"
>
  📥 Download PDF
</a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Ebookspage;

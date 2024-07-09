// import "./App.css";
// import { BrowserRouter, Route,Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Booklist from "./components/Booklist";
// import Bookdetails from "./components/Bookdetails";
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="about" element={<About />}></Route>
//           <Route path="book" element={<Booklist />}></Route>
//           <Route path="/book/:id" element={<Bookdetails />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const BookSearchApp = () => {
  const [query, setQuery] = useState("");
  const [axiosResults, setAxiosResults] = useState([]);
  const apikey = "AIzaSyDg1vbXEPk5VPmtifCEZWUfJe8C6O5uJyw";
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleAxiosSearch = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: { q: query },
        }
      );

      if (response.status === 200) {
        // The structure of the response may be different
        setAxiosResults(response.data.items || []);
      } else {
        console.error("Error fetching data using Axios");
      }
    } catch (error) {
      console.error("Error fetching data using Axios:", error);
    }
  };

  return (
    <div className="center">
      <div className="search">
        <h1>A book is a gift you can open again and again</h1>
        <input type="text" value={query} onChange={handleInputChange} />
        <button onClick={handleAxiosSearch}>Search </button>
      </div>
      <div className="card">
        <ul>
          {axiosResults.map((book) => (
            <li key={book.id}>
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
              />
              <div className="bottom">
                <p>{book.volumeInfo.title} </p>
                <p>
                  {book.volumeInfo.authors &&
                    book.volumeInfo.authors.join(", ")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookSearchApp;

import { SetStateAction, useState } from "react";
import NavBar from "./Components/Navbar";
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import FacultyLogin from "./Components/FacultyLogin";
import EntryPage from "./Components/EntryPage";
import CoursePage from "./Components/CoursePage";
import HomePageFaculty from "./Components/HomePageFaculty";

function App() {
  const [currentPage, setCurrentPage] = useState("landing-page");

  const handlePageChange = (page: SetStateAction<string>) => {
    setCurrentPage(page);
  };

  return (
    <>
      <NavBar setCurrentPage={handlePageChange} navItems={[]} />
      {currentPage === "landing-page" && (
        <EntryPage setCurrentPage={handlePageChange} />
      )}
      {currentPage === "login" && <Login setCurrentPage={handlePageChange} />}
      {currentPage === "home-student" && <HomePage />}
      {currentPage === "home-faculty" && <HomePageFaculty />}
      {currentPage === "detailed-view" && (
        <CoursePage
          setCurrentPage={handlePageChange}
          details={{ name: "", facultyName: "", courseCode: "" }}
        />
      )}
      {currentPage === "faculty-login" && (
        <FacultyLogin setCurrentPage={handlePageChange} />
      )}
    </>
  );
}

export default App;

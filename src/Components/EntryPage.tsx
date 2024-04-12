import Box from "@mui/material/Box";

import "../Styles/MiscStyles.css";

import Footer from "./Footer";
import NavBar from "./Navbar";

import teachericon from "../assets/teachericon.png";
import studenticon from "../assets/studenticon.png";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const EntryPage = ({ setCurrentPage }: Props) => {
  const handleTeacherClick = () => {
    setCurrentPage("faculty-login");
  };

  const handleStudentClick = () => {
    setCurrentPage("login");
  };

  return (
    <>
      <NavBar
        setCurrentPage={setCurrentPage}
        navItems={[]}
        isLoggedIn={false}
      ></NavBar>
      <Box
        className="container"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "30px" }}>
          <Box
            className="box1"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={handleTeacherClick}
          >
            <img
              src={teachericon}
              alt="Teacher Icon"
              style={{ width: "9.50rem", height: "10.50rem" }}
            />
            <span className="Stu">Faculty</span>
          </Box>
          <Box
            className="box3"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={handleStudentClick}
          >
            <img
              src={studenticon}
              alt="Teacher Icon"
              style={{ width: "9.50rem", height: "10.50rem" }}
            />
            <span className="Stu">Student</span>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default EntryPage;

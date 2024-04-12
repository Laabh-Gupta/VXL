import { useState, useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import CourseCard from "./CourseCard";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Typography, TextField } from "@mui/material";
import defaultCourse from "../assets/defaultCourse.png";
import CoursePage from "./CoursePage";

interface Course {
  image: string;
  courseCode: string;
  courseName: string;
}

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [current_page, setCurrentPage] = useState("landing-page");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    const fetchedCourses: Course[] = [
      {
        image: defaultCourse,
        courseCode: "BCSE101L",
        courseName: "Introduction to Computer Science",
      },
      {
        image: defaultCourse,
        courseCode: "BMAT101L",
        courseName: "Introduction to Mathematics",
      },
      {
        image: defaultCourse,
        courseCode: "BPHY101L",
        courseName: "Introduction to Physics",
      },
      {
        image: defaultCourse,
        courseCode: "BENG101L",
        courseName: "Introduction to English Literature",
      },
      {
        image: defaultCourse,
        courseCode: "BCHM101L",
        courseName: "Introduction to Chemistry",
      },
      {
        image: defaultCourse,
        courseCode: "BSTAT101L",
        courseName: "Introduction to Statistics",
      },
      {
        image: defaultCourse,
        courseCode: "BIO101L",
        courseName: "Introduction to Biology",
      },
      {
        image: defaultCourse,
        courseCode: "BECO101L",
        courseName: "Introduction to Economics",
      },
      {
        image: defaultCourse,
        courseCode: "BHIST101L",
        courseName: "Introduction to History",
      },
      {
        image: defaultCourse,
        courseCode: "BPHIL101L",
        courseName: "Introduction to Philosophy",
      },
      {
        image: defaultCourse,
        courseCode: "BGEOL101L",
        courseName: "Introduction to Geology",
      },
      {
        image: defaultCourse,
        courseCode: "BPSYCH101L",
        courseName: "Introduction to Psychology",
      },
      {
        image: defaultCourse,
        courseCode: "BART101L",
        courseName: "Introduction to Art",
      },
      {
        image: defaultCourse,
        courseCode: "BANTH101L",
        courseName: "Introduction to Anthropology",
      },
      {
        image: defaultCourse,
        courseCode: "BPHED101L",
        courseName: "Introduction to Physical Education",
      },
    ];

    setCourses(fetchedCourses);
    setFilteredCourses(fetchedCourses);

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      const filtered = courses.filter(
        (course) =>
          course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.courseCode.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
    }, 300); // Delay of 300 milliseconds

    return () => clearTimeout(delay);
  }, [searchTerm, courses]);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Redirect to login page after logout
        window.location.reload(); // Reloading the page to ensure a fresh start
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setCurrentPage("course-page");
  };

  return (
    <>
      {current_page === "landing-page" && (
        <div
          style={{
            marginTop: "8%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            sx={{ marginBottom: "3%", fontFamily: "Times New Roman" }}
          >
            My Courses
          </Typography>
          <NavBar
            setCurrentPage={isLoggedIn ? handleLogout : () => {}}
            navItems={[]}
            isLoggedIn={true}
          />
          <TextField
            label="Search Courses"
            variant="outlined"
            style={{
              marginBottom: "20px",
              width: "40rem",
              borderRadius: "30px",
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: "20px",
              overflow: "revert",
              marginBottom: "8%",
            }}
          >
            {filteredCourses.map((course, index) => (
              <CourseCard
                key={index}
                image={course.image}
                courseCode={course.courseCode}
                courseName={course.courseName}
                onClick={() => handleCourseClick(course)}
              />
            ))}
          </div>
        </div>
      )}
      {current_page === "course-page" && selectedCourse && (
        <CoursePage
          setCurrentPage={setCurrentPage}
          details={{
            name: selectedCourse.courseCode,
            courseCode: selectedCourse.courseCode,
            facultyName: "Faculty Name", // Add faculty name here or retrieve it from somewhere
          }}
        />
      )}
      <Footer />
    </>
  );
};

export default HomePage;

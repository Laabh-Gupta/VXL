import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmptyImage from "../assets/defaultCourse.png";
import Calendar from "./Calender";
import UploadWindow from "./UploadWindow";
import { Button } from "@mui/material";
import firebase from "firebase/app";
import "firebase/auth";

interface Assignment {
  id: number;
  name: string;
}

interface CoursePageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  details: {
    name: string;
    courseCode: string;
    facultyName: string;
  };
}

const CommonStyles = {
  borderRadius: "12px",
  border: "1px solid #ccc",
  overflow: "hidden",
  maxWidth: "80%",
  margin: "auto",
  marginTop: "10%",
  position: "relative",
};

const CoursePage: React.FC<CoursePageProps> = ({ setCurrentPage, details }) => {
  const [showUploadWindow, setShowUploadWindow] = useState(false);
  const [assignments, setAssignments] = useState<Assignment[]>([
    { id: 1, name: "WebDex Submission" },
    { id: 2, name: "Digital Assigment 2 - Report Writing" },
    { id: 3, name: "Digital Assignment 3 - Research Papers" },
  ]);

  const handleBackClick = () => {
    setCurrentPage("home-student");
    console.log();
  };

  const handleAssignmentClick = (assignmentId: number) => {
    let temp = assignmentId;
    assignmentId = temp;
    temp = assignmentId;

    setShowUploadWindow(true);
  };

  const storageStr = `${""}_${details.courseCode}`;

  return (
    <>
      <Box sx={{ display: "flex", ...CommonStyles }}>
        <Button onClick={handleBackClick}>Back</Button>

        <Box
          sx={{
            flexShrink: 0,
            width: "30%",
            backgroundColor: "#DBF5FA",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              flexShrink: 0,
              width: "80%",
              backgroundColor: "#DBF5FA",
              padding: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minWidth: "150px",
            }}
          >
            <img
              src={EmptyImage}
              alt={EmptyImage}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            p: 2,
            flex: 1,
            backgroundColor: "#FFFFFF",
            marginTop: "12px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontFamily: "Ubuntu",
              fontSize: "1.5rem",
              color: "#023E8A",
            }}
          >
            {details.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem" }}
          >
            Course Code: {details.courseCode}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 1, fontFamily: "Ubuntu", fontSize: "1.2rem" }}
          >
            Faculty: {details.facultyName}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          ...CommonStyles,
          p: 2,
          flex: 1,
          backgroundColor: "#FFFFFF",
          marginTop: "12px",
          marginBottom: "12px",
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px",
        }}
      >
        <Box sx={{ mb: 3, padding: "12px" }}>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Ubuntu", color: "#023E8A" }}
          >
            Assignments
          </Typography>
          {assignments.map((assignment) => (
            <Typography
              key={assignment.id}
              variant="body1"
              sx={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#0077B6",
              }}
              onClick={() => handleAssignmentClick(assignment.id)}
            >
              {assignment.name}
            </Typography>
          ))}
          {showUploadWindow && (
            <Box>
              <UploadWindow />
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          p: 2,
          flex: 1,
          backgroundColor: "#FFFFFF",
          marginTop: "12px",
          marginBottom: "12px",
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Calendar date={new Date()} />
      </Box>
    </>
  );
};

export default CoursePage;

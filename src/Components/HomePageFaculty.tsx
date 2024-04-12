import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getStorage, getDownloadURL, ref, listAll } from "firebase/storage";
import firebaseConfig from "./firebaseConfig";

const HomePageFaculty = () => {
  // Initialize Firebase app with the Firebase configuration
  const firebaseApp = initializeApp(firebaseConfig);

  // Get Firebase Storage instance
  const storage = getStorage(firebaseApp);

  const handleDownloadSubmissions = async () => {
    try {
      // Assume submissions are stored in a folder named "submissions" within the bucket
      const submissionsRef = ref(storage, "");

      // Get the list of files in the "submissions" folder
      const submissionsList = await listAll(submissionsRef);

      // Iterate through the list of submissions
      for (const item of submissionsList.items) {
        // Get the download URL for each submission file
        const downloadUrl = await getDownloadURL(item);

        // Simulate downloading by creating a temporary anchor element
        const downloadLink = document.createElement("a");
        downloadLink.href = downloadUrl;
        downloadLink.download = item.name; // Use the file name as the download attribute
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    } catch (error) {
      console.error("Error downloading submissions:", error);
    }
  };

  return (
    <Box sx={{ textAlign: "center", marginTop: "20%" }}>
      <Typography variant="h4" gutterBottom>
        Faculty Home Page
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleDownloadSubmissions}
      >
        Download Submissions
      </Button>
    </Box>
  );
};

export default HomePageFaculty;

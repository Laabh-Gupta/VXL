import React, { ChangeEvent, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import "../Styles/Login.css";
import "../Styles/MiscStyles.css";
import Footer from "./Footer";
import NavBar from "./Navbar";

import teachericonwhite from "../assets/teachericonwhite.png";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const FacultyLogin = ({ setCurrentPage }: Props) => {
  let firebaseApp = initializeApp(firebaseConfig);

  const temp = firebaseApp;
  firebaseApp = temp;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentPage("home-faculty");
      }
    });

    return () => unsubscribe();
  }, [setCurrentPage]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      const auth = getAuth();
      const { email, password } = formData;
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error during login:", error);
      alert("Incorrect username or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBackButtonClick = () => {
    setCurrentPage("landing-page");
  };

  return (
    <>
      <NavBar
        setCurrentPage={setCurrentPage}
        navItems={[]}
        isLoggedIn={false}
      ></NavBar>
      <div className="mainarea">
        <div className="wtf">
          <div className="container-x">
            <div className="icon">
              <img src={teachericonwhite} alt="Student Icon" />
              <h2>FACULTY &nbsp;LOGIN</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  type="text"
                  id="username"
                  className="input-field"
                  placeholder="Username"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-container-two">
                <br />
                <input
                  type="password"
                  id="password"
                  className="input-field"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div
                className="submitbutton"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1.7rem",
                }}
              >
                <button id="buttonsubmit" type="submit">
                  {loading ? (
                    <CircularProgress color="inherit" size={24} />
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <button
                onClick={handleBackButtonClick}
                style={{
                  fontSize: "1.5rem",
                  backgroundColor: "transparent",
                  marginTop: "-2rem",
                  border: "none",
                  color: "red",
                }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FacultyLogin;

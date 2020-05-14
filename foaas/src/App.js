import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <HeroSection />
      <Form />
    </div>
  );
}

export default App;

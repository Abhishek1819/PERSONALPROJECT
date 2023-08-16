import React from "react";
import BlogSection from "./BlogSection";
import ProjectSection from "./ProjectSection";
import RecommendationSection from "./RecommendationSection";
import SkillsSection from "./SkillsSection";
import Title from "./Title";
import About from "./About";
import Videotop from "./Videotop";
// import { Navbar } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <Videotop />
      <Title />
      <SkillsSection />
      <ProjectSection />
      <BlogSection />
      <About />
      <RecommendationSection />
    </div>
  );
}

export default HomePage;

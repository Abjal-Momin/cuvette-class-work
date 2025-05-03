import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

function App() {
  const items = [
    {
      title: "Learn JavaScript",
      desc: "A comprehensive guide to mastering JavaScript for web development.",
    },
    {
      title: "Introduction to Python",
      desc: "Basics of Python programming for beginners.",
    },
    {
      title: "Web Design Principles",
      desc: "Key concepts and practices for designing modern, user-friendly websites.",
    },
    {
      title: "Data Structures",
      desc: "An overview of common data structures",
    },
  ];

  return (
    <>
      <Header />
      {items.map((item) => {
        return <Card title={item.title} disc={item.desc} />;
      })}
      <Footer />
    </>
  );
}

export default App;

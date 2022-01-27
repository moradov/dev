import React from "react";
import "../../style/home.scss";
import Navbar from "../ui/Navbar";
import Header from "../ui/Header";
import CategoriesList from "../ui/CategoriesList";
// import MyStory from "../ui/MyStory";
import Footer from "../ui/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <CategoriesList />
      {/* <MyStory /> */}
      <Footer />
    </>
  );
};

export default Home;

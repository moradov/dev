import React, { useState } from "react";
import "../../style/home.scss";
import Navbar from "../ui/Navbar";
import Header from "../ui/Header";
import CategoriesList from "../ui/CategoriesList";
// import MyStory from "../ui/MyStory";
import Footer from "../ui/Footer";
const Home = () => {
  const [categoriesPosition, setCategoriesPosition] = useState(null);
  const scrollToCategories = () => {
    if (categoriesPosition && categoriesPosition > 0) {
      window.scrollTo(0, categoriesPosition - 100);
    }
  };
  return (
    <>
      <Navbar />
      <Header scrollToCategories={scrollToCategories} />
      <CategoriesList setCategoriesPosition={setCategoriesPosition} />
      <Footer />
    </>
  );
};

export default Home;

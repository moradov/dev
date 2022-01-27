import React, { useEffect } from "react";
import "../../style/blog.scss";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import PageHeader from "../ui/PageHeader";
import BlogsList from "../ui/BlogsList";
import Spinner from "../ui/Spinner";
import ErrHand from "../ui/ErrHand";
import useGet from "../../hooks/useGet";

const Blogs = () => {
  const [loading, err, data, fetch] = useGet("blogs");
  //eslint-disable-next-line
  useEffect(() => fetch(), []);
  return (
    <>
      <Navbar />
      <PageHeader headerName="Blogs" />
      {loading && <Spinner />}
      {err && <ErrHand onRetryClicked={() => fetch()} />}
      {data.length > 0 && <BlogsList blogsList={data} />}
      <Footer />
    </>
  );
};

export default Blogs;

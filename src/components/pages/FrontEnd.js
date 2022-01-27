import React, { useEffect } from "react";
import "../../style/design.scss";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import PageHeader from "../ui/PageHeader";
import ProjectsList from "../ui/ProjectsList";
import Spinner from "../ui/Spinner";
import ErrHand from "../ui/ErrHand";
import useGet from "../../hooks/useGet";
const FrontEnd = () => {
  const [loading, err, data, fetch] = useGet("projects");
  //eslint-disable-next-line
  useEffect(() => fetch(), []);
  //restore scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <PageHeader headerName="Front End Projects" />
      {loading && <Spinner />}
      {err && <ErrHand onRetryClicked={() => fetch()} />}
      {data.length > 0 ? (
        <ProjectsList projectsList={data} type="front" />
      ) : null}
      <Footer />
    </>
  );
};

export default FrontEnd;

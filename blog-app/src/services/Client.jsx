import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/user/navBar/NavBar";
import Home from "../routes/client/Home";
import Footer from "../components/user/footer/Footer";
import Blog from "../routes/client/Blog";
import SingUp from "../routes/client/SingUp";
import Loading from "../utils/loading/Loading";

const Client = () => {
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <div className=" flex flex-col items-center">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sing-up" element={<SingUp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Client;

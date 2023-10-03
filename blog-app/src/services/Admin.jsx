import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../utils/loading/Loading";
import MenuNav from "../components/admin/menu/MenuNav";
import Dashboard from "../routes/admin/Dashboard";
import PostList from "../routes/admin/PostList";

const Admin = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return isLoading ? (
    <div className=" flex flex-col items-center">
      <Loading />
    </div>
  ) : (
    <div className=" flex flex-col items-center">
      <MenuNav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/post-list" element={<PostList />} />
      </Routes>
    </div>
  );
};

export default Admin;

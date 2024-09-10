import React, { useEffect, useState } from "react";
import Sidebar from "../components/Home/Sidebar";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(window.location.href);
    if (window.location.href === "http://localhost:5173/home/" || window.location.href === "http://localhost:5173/home") {
      navigate("/home/all-task");
    }
    // Simulate loading with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Change 2000 to your desired loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex h-[98vh] gap-4">
          <div className="w-1/6 border-purple-900 rounded-2xl p-4 flex flex-col justify-between bg-gray-300   bg-opacity-10 backdrop-blur-xl  ">
            <Sidebar />
          </div>
          <div className="w-5/6 border-purple-900 rounded-2xl p-4 flex flex-col justify-between bg-gray-100   bg-opacity-10 backdrop-blur-xl overflow-y-scroll no-scrollbar">
            <Outlet />
          </div>
        </div>
      )}
    </>
   
  );
};

export default Home;

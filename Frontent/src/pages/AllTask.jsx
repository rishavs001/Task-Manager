import React, { useState, useEffect } from "react";
import Cards from "../components/Home/Cards";
import { SiAddthis } from "react-icons/si";
import InputData from "../components/Home/InputData";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader/Loader";
import Loader1 from "../components/Loader/Loader1";
import Loader2 from "../components/Loader/Loader2";

const AllTask = () => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const [inputDiv, setInputDiv] = useState("hidden");
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updateData, setUpdateData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "",
    priority: "",
    important: "",
    complete: "",
  });

  const handleClick = () => {
    setInputDiv("fixed");
    setUpdateData({
      id: null, // Set id to null when adding a new task
      title: "",
      description: "",
      dueDate: "",
      status: "",
      priority: "",
      important: "",
      complete: "",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v2/get-all-tasks",
          { headers }
        );
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (localStorage.getItem("id") && localStorage.getItem("token")) {
      fetchData();
    }
  });

  return (
    <>
      <div>
        <h1 class="text-4xl font-extrabold text-indigo-200 mb-6">All Tasks</h1>

        <div className="w-full flex justify-end p-4">
          <button onClick={handleClick}>
            <SiAddthis className="text-5xl text-purple-400 hover:text-yellow-600 hover:cursor-pointer transition-all duration-300" />
          </button>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-4 justify-center gap-4">
            <Loader1 />
            <Loader2 />
            <Loader1 />
            <Loader1 />
            <Loader2 />
            <Loader2 />
          </div>
        ) : (
          <Cards
            home={"true"}
            setInputDiv={setInputDiv}
            data={tasks}
            setUpdateData={setUpdateData}
          />
        )}
      </div>
      <InputData
        InputDiv={inputDiv}
        setInputDiv={setInputDiv}
        updateData={updateData}
        setUpdateData={setUpdateData}
      />
      {/* <ToastContainer /> */}
    </>
  );
};

export default AllTask;

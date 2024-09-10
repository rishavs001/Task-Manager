import React, { useEffect, useState } from "react";
import Cards from "../components/Home/Cards";
import axios from "axios";
import Loader1 from "../components/Loader/Loader1";
import Loader2 from "../components/Loader/Loader2";

const CompleteTask = () => {
  const [task, setTasks] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v2/get-all-comp-tasks",
          { headers }
        );
        // console.log(response.data);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  });
  return (
    <div>
      <h1 class="text-4xl font-extrabold text-indigo-200 mb-6">
        Completed Tasks
      </h1>
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
      <Cards home={"false"} data={task} />)}
    </div>
  );
};

export default CompleteTask;

import React, { useState, useEffect } from "react";

import { CiHeart } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";
import axios from "axios";
import { IoHeartDislikeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Cards = ({ home, setInputDiv, data, setUpdateData }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const handleStatus = async (id) => {
    try {
      console.log(headers);
      const response = await axios.put(
        `http://localhost:3000/api/v2/update-comp-tasks/${id}`,
        {},
        { headers }
      );
      // console.log(response);

      switch (true) {
        case response.status >= 100 && response.status < 200:
          toast.info(response.data.message, { autoClose: 3000 });
          break;
        case response.status >= 200 && response.status < 300:
          toast.success(response.data.message, { autoClose: 3000 });

          break;
        case response.status >= 300 && response.status < 400:
          toast.warning(response.data.message, { autoClose: 3000 });
          break;
        case response.status >= 400 && response.status < 500:
          toast.error(response.data.message, {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 15000,
          });
          break;
        case response.status >= 500 && response.status < 600:
          toast.error(response.data.message, {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 15000,
          });
          break;
        default:
          //   console.error(`Unexpected response status: ${response.status}`);
          toast.error("Unknown Error", { autoClose: 3000 });
      }
    } catch (err) {
      //   console.error("Error:", err);
      toast.error("An error occurred. Please try again later.", {
        autoClose: 3000,
      });
    }
  };
  const handle_important = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v2/update-imp-tasks/${id}`,
        {},
        { headers }
      );
      setTasks(data);

      switch (true) {
        case response.status === 200:
          toast.success(response.data.message, { autoClose: 3000 });
          break;
        case response.status === 404:
          toast.warning(response.data.message, { autoClose: 3000 });
          break;
        case response.status === 500:
          toast.error(response.data.message, {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 15000,
          });
          break;
        default:
          toast.warning("Unknown Error", { autoClose: 3000 });
      }
    } catch (err) {
      // console.log(err);
      toast.error(err.response.statusText);
    }
  };
  const updateTask = async (
    id,
    title,
    description,
    status,
    dueDate,
    priority,
    important,
    complete
  ) => {
    setInputDiv("fixed");
    const formattedDate = new Date(dueDate).toISOString().split("T")[0];
    setUpdateData({
      id: id,
      title: title,
      description: description,
      status: status,
      dueDate: formattedDate,
      priority: priority,
      important: important,
      complete: complete,
    });
  };
  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v2/delete-tasks/${id}`,
        { headers }
      );
      // setTasks(data);
      // console.log(response);
      switch (true) {
        case response.status === 200:
          toast.success(response.data.message, { autoClose: 3000 });
          break;
        case response.status === 404:
          toast.warning(response.data.message, { autoClose: 3000 });
          break;
        case response.status === 500:
          toast.error(response.data.message, {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 15000,
          });
          break;
        default:
          toast.warning("Unknown Error", { autoClose: 3000 });
      }
    } catch (err) {
      // console.log(err);
      toast.error(err.response.statusText);
    }
  };

  // const data = [
  //     {
  //         id: 1,
  //         title: "Complete Project Report",
  //         description:
  //             "Compile and finalize the project report including all sections such as introduction, methodology, results, discussion, and conclusion. Make sure to include all necessary data, graphs, and analysis.",
  //         status: "incomplete"
  //     },
  //     {
  //         id: 2,
  //         title: "Prepare Presentation Slides",
  //         description:
  //             "Create visually appealing presentation slides summarizing key points of the project. Include relevant images, charts, and bullet points for clarity.",
  //         status: "incomplete"
  //     },
  //     {
  //         id: 3,
  //         title: "Review Codebase",
  //         description:
  //             "Review and analyze the codebase for any bugs, optimizations, or improvements. Document any issues found and propose solutions.",
  //         status: "incomplete"
  //     },
  //     {
  //         id: 4,
  //         title: "Conduct User Testing",
  //         description:
  //             "Plan and conduct user testing sessions to gather feedback on the usability and functionality of the product. Document user feedback and suggest enhancements.",
  //         status: "incomplete"
  //     },
  //     {
  //         id: 5,
  //         title: "Optimize Website Performance",
  //         description:
  //             "Identify and implement optimizations to improve website loading speed, user experience, and overall performance. Utilize tools like Lighthouse and GTmetrix for analysis.",
  //         status: "incomplete"
  //     },
  //     {
  //         id: 6,
  //         title: "Create Marketing Campaign",
  //         description:
  //             "Develop a comprehensive marketing campaign including social media posts, email newsletters, and promotional offers. Monitor campaign performance and adjust strategies as needed.",
  //         status: "complete"
  //     },
  //     {
  //         id: 7,
  //         title: "Organize Team Meeting",
  //         description:
  //             "Schedule and organize a team meeting to discuss project progress, upcoming tasks, and any roadblocks. Share updates and collaborate on solutions.",
  //         status: "incomplete"
  //     },
  //     {
  //         id: 8,
  //         title: "Write Blog Post",
  //         description:
  //             "Craft an engaging blog post on a relevant industry topic. Conduct research, outline key points, and create compelling content with SEO optimization.",
  //         status: "incomplete"
  //     },
  //     {
  //         id: 9,
  //         title: "Update Documentation",
  //         description:
  //             "Review and update project documentation including user manuals, technical guides, and API documentation. Ensure information is accurate and up to date.",
  //         status: "complete"
  //     },
  //     {
  //         id: 10,
  //         title: "Test Mobile App Compatibility",
  //         description:
  //             "Test the mobile app on various devices and screen sizes to ensure compatibility and responsiveness. Address any issues related to UI/UX and functionality.",
  //         status: "incomplete"
  //     },
  // ];
  //   const [card, setCard] = useState(data);

  return (
    <div className="grid grid-cols-4 gap-6 p-8">
      {data &&
        data.map((items) => (
          <div className="flex flex-col justify-between rounded-2xl p-6 bg-gray-900 shadow-xl transform hover:scale-105 hover:bg-gray-800 transition-all duration-300">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                {items.title || <Skeleton />}
              </h3>
              <hr className="my-2 border-gray-700" />
              <p className="text-gray-300 mb-8">
                {items.description || <Skeleton count={10} />}
              </p>

              <div className="bg-gray-200 shadow-lg rounded-xl p-1 space-y-1 mt-1">
                <p className="font-medium text-gray-600">
                  <strong>Due Date:</strong>{" "}
                  <span className="text-gray-700">
                    {new Date(items.dueDate).toLocaleDateString() || (
                      <Skeleton count={10} />
                    )}
                  </span>
                </p>
                <p className="font-medium text-gray-600">
                  <strong>Priority:</strong>{" "}
                  <span
                    className={`${
                      items.priority === "High"
                        ? "text-red-500"
                        : items.priority === "Medium"
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  >
                    {items.priority || <Skeleton count={10} />}
                  </span>
                </p>
                <p className="font-medium text-gray-600">
                  <strong>Completed:</strong>{" "}
                  <span
                    className={`${
                      items.complete ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {items.complete ? "Yes" : "No" || <Skeleton count={10} />}
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-6 w-full flex items-center justify-between">
              <div>
                <button
                  className={`inline-flex items-center px-4 py-2 transition ease-in-out delay-75 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110 ${
                    items.status === "Pending"
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : items.status === "In Progress"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : items.status === "Completed"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                  onClick={() => handleStatus(items._id)}
                >
                  {items.status || <Skeleton count={10} />}
                </button>
              </div>
              <div className="text-whiite p-2 w-3/6 text-2xl font-semibold flex justify-around">
                <button
                  className="hover:scale-150"
                  onClick={() => handle_important(items._id)}
                >
                  {items.important === false ? (
                    <IoHeartDislikeSharp />
                  ) : (
                    <FaHeart className="text-red-500" />
                  )}
                </button>
                { home === "true" &&
                <button
                  className="hover:scale-150"
                  onClick={() =>
                    updateTask(
                      items._id,
                      items.title,
                      items.description,
                      items.status,
                      items.dueDate,
                      items.priority,
                      items.important,
                      items.complete
                    )
                  }
                >
                  <FaEdit />
                </button>}
                <button
                  className="hover:scale-150"
                  onClick={() => deleteTask(items._id)}
                >
                  <RiDeleteBin2Line />
                </button>
              </div>
            </div>
          </div>
        ))}
      {home === "true" && (
        <button
          className="flex flex-col justify-center rounded-2xl items-center p-6 bg-gray-900 shadow-xl transform hover:bg-yellow-600 hover:cursor-pointer transition-all duration-300"
          onClick={() => setInputDiv("fixed")}
        >
          <SiAddthis className="text-6xl text-white" />
          <h3 className="text-2xl mt-4 text-white">Add task</h3>
        </button>
      )}
    </div>
  );
};

export default Cards;

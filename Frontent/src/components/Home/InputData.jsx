import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();

const InputData = ({ InputDiv, setInputDiv, updateData, setUpdateData }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    status: "",
    dueDate: "",
    priority: "",
    important: "",
    complete: "",
  });

  useEffect(() => {
    setData({
      title: updateData.title,
      description: updateData.description,
      dueDate: updateData.dueDate,
      status: updateData.status,
      priority: updateData.priority,
      important: updateData.important,
      complete: updateData.complete,
    });
  }, [updateData]);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClick = () => {
    setInputDiv("hidden");
    setUpdateData({
      title: "",
      description: "",
      dueDate: "",
      status: "",
      priority: "",
    });
  };

  const updateTask = async () => {
    try {
      if (
        data.title === "" ||
        data.description === "" ||
        data.dueDate === "" ||
        data.status === "" ||
        data.priority === ""
      ) {
        toast.warning("All Field Required", { autoClose: 3000 });
        // alert("all field required");
      } else {
        const response = await axios.put(
          `http://localhost:3000/api/v2/update-tasks/${updateData.id}`,
          data,
          { headers }
        );
        setData({
          title: "",
          description: "",
          dueDate: "",
          status: "",
          priority: "",
        });
        setInputDiv("hidden");

        switch (true) {
          case response.status === 200:
            toast.success("Task Update Succesfully", { autoClose: 3000 });
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
      }
    } catch (err) {
      // console.log(err);
      toast.error(err.response.statusText);
    }
  };

  const submit = async () => {
    if (
      data.title === "" ||
      data.description === "" ||
      data.dueDate === "" ||
      data.status === "" ||
      data.priority === ""
    ) {
      toast.warning("All Field Required", { autoClose: 3000 });
      // alert("all field required");
    } else {
      const response = await axios.post(
        "http://localhost:3000/api/v2/create-task",
        data,
        {
          headers,
        }
      );
      setData({
        title: "",
        description: "",
        dueDate: "",
        status: "",
        priority: "",
      });
      setInputDiv("hidden");
      switch (response.status) {
        case 404:
          toast.warning(response.data.message, { autoClose: 3000 });
          break;
        case 500:
          toast.error(response.data.message, {
            position: toast.POSITION.BOTTOM_LEFT,
            autoClose: 15000,
          });
          break;
        default:
          toast.success("Task created successfully  ImputData.jsx", {
            autoClose: 10000,
          });
      }
    }
  };

  return (
    <div>
      <div
        className={`${InputDiv} top-0 bg-gray-800 bg-opacity-50 backdrop-blur h-screen w-full`}
      ></div>
      <div
        className={`${InputDiv} top-0 flex items-center justify-center h-screen w-full`}
      >
        <div className="w-3/4 mx-auto relative overflow-hidden z-10 bg-gray-900 shadow-2xl rounded-3xl p-8">
          <div className="w-full flex justify-end">
            <button
              onClick={handleClick}
              className="text-4xl text-purple-600 hover:text-yellow-500 hover:cursor-pointer transition-all duration-300"
            >
              <FaWindowClose />
            </button>
          </div>

          <div className="mb-6">
            <input
              className="mt-2 p-3 w-full bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Title"
              name="title"
              type="text"
              value={data.title}
              onChange={change}
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              className="my-4 py-3 px-4 w-full bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
              cols="30"
              rows="8"
              name="description"
              id="Description"
              placeholder="Description..."
              value={data.description}
              onChange={change}
              required
            ></textarea>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="w-1/3 pr-3">
              <label className="block text-gray-300 font-medium">
                Due Date
              </label>
              <input
                className="mt-2 p-3 w-full bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                name="dueDate"
                type="date"
                value={data.dueDate}
                onChange={change}
                required
              />
            </div>
            <div className="w-1/3 pl-3">
              <label className="block text-gray-300 font-medium">
                Priority
              </label>
              <select
                className="mt-2 p-3 w-full bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                name="priority"
                value={data.priority}
                required
                onChange={change}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="w-1/3 pl-3">
              <label className="block text-gray-300 font-medium">Status</label>
              <select
                className="mt-2 p-3 w-full bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                name="status"
                value={data.status}
                onChange={change}
                required
              >
                <option value="">Select status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                className="mr-2 bg-gray-800 border border-gray-700 rounded text-purple-600 focus:ring-2 focus:ring-purple-600"
                type="checkbox"
                name="important"
                value={data.important}
                onChange={change}
              />
              <label className="text-gray-300">Important</label>
            </div>
            <div className="flex items-center">
              <input
                className="mr-2 bg-gray-800 border border-gray-700 rounded text-purple-600 focus:ring-2 focus:ring-purple-600"
                type="checkbox"
                name="complete"
                value={data.complete}
                onChange={change}
              />
              <label className="text-gray-300">Complete</label>
            </div>
          </div>

          <div className="flex justify-center">
            {updateData.id === null ? (
              <button
                className="bg-gradient-to-r from-purple-700 via-purple-500 to-blue-600 text-gray-300 px-6 py-3 font-medium rounded-xl hover:opacity-80 transition-all duration-300"
                onClick={submit}
              >
                Submit
              </button>
            ) : (
              <button
                className="bg-gradient-to-r from-purple-700 via-purple-500 to-blue-600 text-gray-300 px-6 py-3 font-medium rounded-xl hover:opacity-80 transition-all duration-300"
                onClick={updateTask}
              >
                Update
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputData;

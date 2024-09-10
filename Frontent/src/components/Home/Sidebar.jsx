import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import axios from "axios";

const Sidebar = () => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authActions.logout());
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v2/get-all-tasks",
        {
          headers,
        }
      );
      setItems(response.data);
    };
    fetch();
  });

  const data = [
    {
      title: "All task",
      icon: <CgNotes />,
      link: "/home/all-task",
    },
    {
      title: "Important task",
      icon: <MdLabelImportant />,
      link: "/home/important-task",
    },
    {
      title: "Competed task",
      icon: <FaCheckDouble />,
      link: "/home/completed-task",
    },
    {
      title: "Incompleted task",
      icon: <TbNotebookOff />,
      link: "/home/incompleted-task",
    },
  ];

  return (
    // <>
    //     {items && (
    //         <div>
    //             <h2 className='text-xl front-semibold'>{items.username} </h2>
    //             <h2 className='mb-1 text-purple-200'>{items.email}</h2>
    //             <hr />
    //         </div>)}
    //     <div>
    //         {data.map((items, i) => (
    //             <Link
    //                 to={items.link}
    //                 key={i}
    //                 className='my-2 flex bg-purple-600 items-center w-full p-4 rounded-xl bg-opacity-10 backdrop-blur-md   text-white  transform hover:scale-105 hover:bg-purple-400  transition-all duration-300'>{items.icon} &nbsp;&nbsp; {items.title}</Link>
    //         ))}
    //     </div>
    //     <div>
    //         <button className='bg-orange-800 w-full p-4 bg-opacity-20 backdrop-blur-sm rounded-xl text-white hover:bg-orange-500 transition-all duration-300' onClick={logout}> Logout</button>
    //     </div>
    // </>

    <>
      {items && (
        <div className="bg-gray-900 shadow-xl rounded-2xl p-6 mb-6">
          {/* <h2 className="text-2xl font-bold text-white">{items.username}</h2>
          <h2 className="mb-4 text-purple-400">{items.email}</h2>
          <hr className="border-gray-700 mb-4" /> */}

          <div class="flex items-center p-3  bg-white rounded-md shadow-lg">
            <section class="flex justify-center items-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
              <svg viewBox="0 0 15 15" class="w-7 fill-gray-700">
                <path d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"></path>
              </svg>
            </section>

            <section class="block border-l border-gray-300 m-3">
              <div class="pl-3">
                <h3 class="text-gray-600 font-semibold text-sm">
                  {items.username}
                </h3>
                <h3 class="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-lg font-bold">
                  {items.email}
                </h3>
              </div>
            </section>
          </div>
        </div>
      )}
      <div>
        {data.map((items, i) => (
          <Link
            to={items.link}
            key={i}
            className="my-4 flex bg-gray-900 items-center w-full p-4 rounded-2xl bg-opacity-20 backdrop-blur-md text-white transform hover:scale-105 hover:bg-gray-800 transition-all duration-300"
          >
            {items.icon} &nbsp;&nbsp;{" "}
            <span className="text-lg font-medium">{items.title}</span>
          </Link>
        ))}
      </div>
      <div>
        <button
          className="bg-orange-800 w-full p-4 bg-opacity-20 backdrop-blur-sm rounded-2xl text-white hover:bg-orange-500 transition-all duration-300"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Sidebar;

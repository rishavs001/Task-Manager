import React, { useEffect } from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import AllTask from "./pages/AllTask";
import ImportantTask from "./pages/ImportantTask";
import CompleteTask from "./pages/CompleteTask";
import IncompletedTask from "./pages/IncompletedTask";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/Error/NotFound";
// toast.configure();

// toast.configure({
//   position: "top-right", // Set the position to top-right
// });

function App() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("id") && localStorage.getItem("token")) {
      dispatch(authActions.login());
    } else if (isLoggedIn === false) {
      navigate("/signup");
    }
  }, []);

  return (
    <>
      {/* <div className='bg-purple-900  text-white h-screen p-2  bg-gradient-to-b from-gray-900 to-black-900 relative'> */}
      {/* <div className="max-w mx-auto h-screen p-2 relative overflow-hidden z-10 bg-gray-800 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"> */}
      <div className="bg-gray-800 text-white h-full min-h-screen p-4 relative  overflow-y-scroll no-scrollbar">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<Home />}>
            <Route path="/home/all-task" element={<AllTask />} />
            <Route path="/home/important-task" element={<ImportantTask />} />
            <Route path="/home/completed-task" element={<CompleteTask />} />
            <Route
              path="/home/incompleted-task"
              element={<IncompletedTask />}
            />
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;

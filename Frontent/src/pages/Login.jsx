import React, { useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from 'axios'
import { authActions } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn === true) {
    navigate('/home/all-task')
  }

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submit = async () => {
    try {
      if (data.username === "" || data.password === "") {
        alert("All fields are required");
      } else {
        const response = await axios.post("http://localhost:3000/api/v1/login", data);
        if (response.status === 200) {
          setData({ username: "", password: "" });
          // console.log(response.data);
          // alert(response.data.message);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("token", response.data.token);
          dispatch(authActions.login());
          navigate("/home");
        }
      }
    } catch (err) {
      console.error(err);
      alert(err.response.data.message);
    }
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 to-purple-900 text-purple-900 min-h-screen">
      <Navbar />
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-32 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-[16]">
          <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="Sample image" />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left">
            <label className="mr-1 text-purple-400">Sign In with</label>
            <button type="button" className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
              <BiLogoFacebook size={20} className="flex justify-center items-center w-full" />
            </button>
            <button type="button" className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">
              <AiOutlineTwitter size={20} className="flex justify-center items-center w-full" />
            </button>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
          </div>
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="username" name="username" value={data.username} onChange={change} />
          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="********" name="password" value={data.password} onChange={change} />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
          </div>
          <div className="text-center md:text-left">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" onClick={submit}>Login</button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don&apos;t have an account? <Link className="text-red-600 hover:underline hover:underline-offset-4" to="/signup">Register</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
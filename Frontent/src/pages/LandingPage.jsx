import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn === true) {
    navigate("/home/all-task");
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 to-purple-900 text-white min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      {/* Landing Page Content */}
      <header className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Streamline Your Task Management
          </h1>
          <p className="text-lg md:text-xl mb-12">
            Effortlessly organize your tasks and boost your productivity.
          </p>
          <div className="flex justify-center mb-16">
            <Link
              to="/signup"
              className="bg-purple-600 text-white px-8 py-4 rounded-md hover:bg-purple-700 transition-colors duration-300 mr-4 shadow-lg"
            >
              Get Started
            </Link>
            <Link to="/login" className="text-white hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Key Features Cards */}
            <div className="flex items-center bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center mr-4">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Organize Your Tasks
                </h3>
                <p className="text-sm">
                  Efficiently manage and organize your tasks.
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center mr-4">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Collaborate with Team
                </h3>
                <p className="text-sm">
                  Efficiently manage and organize your tasks.
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center mr-4">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
                <p className="text-sm">
                  Efficiently manage and organize your tasks.
                </p>
              </div>
            </div>
            {/* Repeat for other key features */}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Why Choose Our Task Management App?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Why Choose Cards */}
            <div className="bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Intuitive Interface
              </h3>
              <p className="text-sm text-white">
                Our task management app features a clean and intuitive
                interface, making it easy to navigate and use..
              </p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Real-Time Collaboration
              </h3>
              <p className="text-sm text-white">
                Easily collaborate with your team and stay on top of shared
                tasks in real-time.
              </p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Powerful Analytics
              </h3>
              <p className="text-sm text-white">
                Gain valuable insights into your team's productivity and task
                progress with our advanced analytics.
              </p>
            </div>
            {/* Repeat for other why choose cards */}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Streamline Your Workflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex items-center bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Task Prioritization
                </h3>
                <p className="text-sm">
                  Easily prioritize and manage your tasks based on importance
                  and deadlines.
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Customizable Views
                </h3>
                <p className="text-sm">
                  Personalize your task management experience with customizable
                  views and layouts.
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Calendar Integration
                </h3>
                <p className="text-sm">
                  Seamlessly integrate your tasks with your calendar to stay on
                  top of deadlines and schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Trusted by Thousands of Users
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <div className="flex items-center mb-4">
                <img
                  src="/avatar1.jpg"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">John Doe</h4>
                  <p className="text-sm text-gray-400">Project Manager</p>
                </div>
              </div>
              <p className="text-sm text-white">
                "This task management app has been a game-changer for our team.
                It's easy to use and has helped us stay organized and on top of
                our projects."
              </p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <div className="flex items-center mb-4">
                <img
                  src="/avatar2.jpg"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Jane Smith
                  </h4>
                  <p className="text-sm text-gray-400">Product Designer</p>
                </div>
              </div>
              <p className="text-sm text-white">
                "I've tried several task management tools, but this one is by
                far the most intuitive and effective. It's helped me stay on top
                of my workload and collaborate with my team seamlessly."
              </p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300">
              <div className="flex items-center mb-4">
                <img
                  src="/avatar3.jpg"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Michael Johnson
                  </h4>
                  <p className="text-sm text-gray-400">Software Engineer</p>
                </div>
              </div>
              <p className="text-sm text-white">
                "This task management app has been a game-changer for our team.
                It's easy to use and has helped us stay organized and on top of
                our projects."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Take Control of Your Productivity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src="/task-management.jpg"
                alt="Task Management"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Effortless Task Management
              </h3>
              <p className="mb-6">
                Our task management app provides a centralized hub to organize,
                prioritize, and track your tasks with ease. Say goodbye to the
                chaos of scattered to-do lists and embrace a streamlined
                workflow.
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>Drag-and-drop task organization</li>
                <li>Customizable task views and status tracking</li>
                <li>Intelligent task scheduling and reminders</li>
              </ul>
              <div className="flex justify-start">
                <Link
                  to="/signup"
                  className="bg-purple-600 text-white px-8 py-4 rounded-md hover:bg-purple-700 transition-colors duration-300 shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Streamline Your Team's Workflow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Collaborative Task Management
              </h3>
              <p className="mb-6 text-white">
                Our task management app makes it easy to collaborate with your
                team. Assign tasks, leave comments, and track progress in
                real-time, ensuring everyone is on the same page.
              </p>
              <ul className="list-disc pl-6 mb-8 text-white">
                <li>Shared task boards and calendars</li>
                <li>Real-time updates and notifications</li>
                <li>Seamless file sharing and attachments</li>
              </ul>
              <div className="flex justify-start">
                <Link
                  to="/signup"
                  className="bg-purple-600 text-white px-8 py-4 rounded-md hover:bg-purple-700 transition-colors duration-300 shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/team-collaboration.jpg"
                alt="Team Collaboration"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Powerful Analytics for Your Tasks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src="/analytics.jpg"
                alt="Analytics"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Gain Valuable Insights
              </h3>
              <p className="mb-6">
                Our task management app provides advanced analytics and
                reporting tools to help you understand your team's productivity,
                identify bottlenecks, and optimize your workflow.
              </p>
              <ul className="list-disc pl-6 mb-8">
                <li>Task completion rates and timelines</li>
                <li>Team member productivity metrics</li>
                <li>Customizable dashboards and reports</li>
              </ul>
              <div className="flex justify-start">
                <Link
                  to="/signup"
                  className="bg-purple-600 text-white px-8 py-4 rounded-md hover:bg-purple-700 transition-colors duration-300 shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;

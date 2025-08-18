import "./Login.css";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: email,
        password: password,
      })
    );
    navigate("/home");
  };
  return (
    <div>
      <div className="flex justify-center pt-25 ">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={(e) => handelSubmit(e)}>
            <div className="">
              <h4 className="text-3xl font-medium text-gray-900 dark:text-white">
                Login
              </h4>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter email Address..."
              />
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {/* <span className="font-medium">Email  !</span>  */}
              </p>
            </div>
            <div>
              <label
              
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              />
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                {/* <span className="font-medium">Password  !</span> */}
              </p>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered? <Link to="/">Create account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
//APP.JSX 
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./components/features/userSlice";
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
const App = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Home" element={user ? <Home /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

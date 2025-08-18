import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice"; // using login reducer to store user

const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    gender: "",
    language: [],
  });

  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // handle checkbox (language)
  const handleLanguage = (e) => {
    const { value, checked } = e.target;
    let updated = [...user.language];
    if (checked) {
      updated.push(value);
    } else {
      updated = updated.filter((lang) => lang !== value);
    }
    setUser({ ...user, language: updated });
  };

  //  validation
  const validate = () => {
    let newError = {};
    if (!user.firstName) newError.firstName = "First name required";
    if (!user.lastName) newError.lastName = "Last name required";
    if (!user.email) newError.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(user.email))
      newError.email = "Invalid email";
    if (!user.password) newError.password = "Password required";
    if (!user.country) newError.country = "Country required";
    if (!user.gender) newError.gender = "Gender required";
    if (user.language.length === 0)
      newError.language = "At least one language required";

    setError(newError);
    return Object.keys(newError).length === 0;
  };

  //  submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // store user in redux (same as login)
    dispatch(login(user));

    // redirect to Home
    navigate("/home");
  };

  return (
    <div>
      <div className="flex justify-center pt-25 ">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h4 className="text-3xl font-medium text-gray-900 dark:text-white">
              Signup
            </h4>
            <hr className="bg-white" />

            {/* First / Last Name */}
            <div className="flex justify-center gap-4">
              <div>
                <label className="block mb-2 text-sm">Enter First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="bg-gray-50 border rounded-lg p-2.5 w-full"
                />
                {error.firstName && (
                  <p className="text-red-500 text-sm">{error.firstName}</p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-sm">Enter Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="bg-gray-50 border rounded-lg p-2.5 w-full"
                />
                {error.lastName && (
                  <p className="text-red-500 text-sm">{error.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm">Enter Email</label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter email..."
                className="bg-gray-50 border rounded-lg p-2.5 w-full"
              />
              {error.email && (
                <p className="text-red-500 text-sm">{error.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm">Enter Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="bg-gray-50 border rounded-lg p-2.5 w-full"
              />
              {error.password && (
                <p className="text-red-500 text-sm">{error.password}</p>
              )}
            </div>

            {/* Country */}
            <div>
              <label className="block mb-2 text-sm">Select Country</label>
              <select
                name="country"
                value={user.country}
                onChange={handleChange}
                className="bg-gray-50 border rounded-lg p-2.5 w-full"
              >
                <option value="" disabled>
                  Choose a country
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              {error.country && (
                <p className="text-red-500 text-sm">{error.country}</p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-2 text-sm">Select Gender</label>
              <select
                name="gender"
                value={user.gender}
                onChange={handleChange}
                className="bg-gray-50 border rounded-lg p-2.5 w-full"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {error.gender && (
                <p className="text-red-500 text-sm">{error.gender}</p>
              )}
            </div>

            {/* Languages */}
            <div className="flex gap-2">
              <label className="text-sm">Select Language:</label>
              <input
                type="checkbox"
                value="English"
                checked={user.language.includes("English")}
                onChange={handleLanguage}
              />
              <span>English</span>
              <input
                type="checkbox"
                value="Hindi"
                checked={user.language.includes("Hindi")}
                onChange={handleLanguage}
              />
              <span>Hindi</span>
              <input
                type="checkbox"
                value="Gujarati"
                checked={user.language.includes("Gujarati")}
                onChange={handleLanguage}
              />
              <span>Gujarati</span>
            </div>
            {error.language && (
              <p className="text-red-500 text-sm">{error.language}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5"
            >
              Signup
            </button>

            <div className="text-sm text-gray-500">
              Already have account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
//import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
      console.log("Signup Success:", state.user);
    },
    login: (state, action) => {
      state.user = action.payload;
      console.log("Login Success:", state.user);
    },
    logout: (state) => {
      state.user = null;
      console.log("User Logged Out");
    },
  },
});

export const { signup, login, logout } = userSlice.actions;

// selector
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

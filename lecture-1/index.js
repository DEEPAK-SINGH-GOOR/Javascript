import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
const Logout = () => {
  const dispatch = useDispatch();
  let User = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    gender: "",
    language: [],
  };
  const [user, setUser] = useState(User);

  const [error, setError] = useState({});

  const validate = () => {
    let newError = {};

    if (!user.firstName) {
      newError.firstName = "First name required";
    } else if (!/^[A-Za-z]+$/.test(user.firstName)) {
      newError.firstName = "Only alphabets allowed";
    }

    if (!user.lastName) {
      newError.lastName = "Last name required";
    } else if (!/^[A-Za-z]+$/.test(user.lastName)) {
      newError.lastName = "Only alphabets allowed";
    }

    if (!user.email) {
      newError.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      newError.email = "Invalid email format";
    }

    if (!user.password) {
      newError.password = "Password is required";
    } else if (user.password.length < 6) {
      newError.password = "Password must be at least 6 characters";
    }

    if (!user.dob) {
      newError.dob = "Date of birth required";
    }

    if (!user.contact) {
      newError.contact = "Contact number required";
    } else if (!/^[0-9]{10}$/.test(user.contact)) {
      newError.contact = "Contact must be 10 digits";
    }

    if (!user.country) {
      newError.country = "Country is required";
    }

    if (!user.gender) {
      newError.gender = "Gender is required";
    }

    if (user.language.length === 0) {
      newError.language = "At least one language required";
    }

    console.log(Object.keys(newError).length, "length");
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, "NAME");
    console.log(value, "value");

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(signup(user));
    console.log("working");
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      {/* <button
        onClick={(e) => handleLogout(e)}
        className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Logout
      </button> */}
 <nav className="relative bg-gray-800 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 ">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className=" flex h-16 items-center justify-end">
      <button
        onClick={(e) => handleLogout(e)}
        className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Logout
      </button>
    </div>
  </div>
</nav> 

      <div className="flex flex-col justify-center sm:h-screen p-4 ">
        <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold">Registration Form</h1>
          </div>
          <form onSubmit={handleSubmit}>

            <div className="space-y-6">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                value={user.firstName}
                onChange={handleChange}
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter First Name"
              />
              <p className="mt-2 text-sm text-red-600">{error.firstName}</p>
            </div>
            <br />

            <div className="space-y-6">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                value={user.lastName}
                onChange={handleChange}
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter Last Name"
              />
              <p className="mt-2 text-sm text-red-600">{error.lastName}</p>
            </div>
            <br />

            <div className="space-y-6">
              <label className="text-slate-900 text-sm font-medium mb-2 block">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={user.email}
                onChange={handleChange}
                className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter Email"
              />
              <p className="mt-2 text-sm text-red-600">{error.email}</p>
            </div>
            <br />

            <div className="sm:flex gap-5">
              <div className="w-[180px]">
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Date Of Birth
                </label>
                <input
                  name="dob"
                  type="date"
                  value={user.dob}
                  onChange={handleChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                />
                <p className="mt-2 text-sm text-red-600">{error.dob}</p>
              </div>

              <div className="w-[180px]">
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Contact No.
                </label>
                <input
                  name="contact"
                  type="text"
                  value={user.contact}
                  onChange={handleChange}
                  placeholder="Enter Contact No."
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                />
                <p className="mt-2 text-sm text-red-600">{error.contact}</p>
              </div>
            </div>
            <br />

            <div className="flex justify-center gap-6">
              <div className="w-[180px]">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Select Country
                </label>
                <select
                  name="country"
                  value={user.country}
                  onChange={handleChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// ---------------- ACTION ----------------
export const addUser = (user) => ({
  type: "ADD_USER",
  payload: user,
});

export const deleteUser = (id) => ({
  type: "DELETE_USER",
  payload: id,
});

// ---------------- REDUCER ----------------
const initialState = {
  users: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
      };
    default:
      return state;
  }
}

// ---------------- STORE ----------------
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  users: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// ---------------- COMPONENT ----------------
const Registration = () => {
  const dispatch = useDispatch();

  let User = {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    contact: "",
    country: "",
    gender: "",
    language: [],
  };

  const [user, setUser] = useState(User);
  const [error, setError] = useState({});
  const users = useSelector((state) => state.users.users); // ✅ FIXED SELECTOR

  const validate = () => {
    let newError = {};
    if (!user.firstName) {
      newError.firstName = "First name required";
    } else if (!/^[A-Za-z]+$/.test(user.firstName)) {
      newError.firstName = "Only alphabets allowed";
    }
    if (!user.lastName) {
      newError.lastName = "Last name required";
    } else if (!/^[A-Za-z]+$/.test(user.lastName)) {
      newError.lastName = "Only alphabets allowed";
    }
    if (!user.email) {
      newError.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
      newError.email = "Invalid email format";
    }
    if (!user.dob) {
      newError.dob = "Date of birth required";
    }
    if (!user.contact) {
      newError.contact = "Contact number required";
    } else if (!/^[0-9]{10}$/.test(user.contact)) {
      newError.contact = "Contact must be 10 digits";
    }
    if (!user.country) {
      newError.country = "Country is required";
    }
    if (!user.gender) {
      newError.gender = "Gender is required";
    }
    if (user.language.length === 0) {
      newError.language = "At least one language required";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "language") {
      let updated = [...user.language];
      if (checked) {
        updated.push(value);
      } else {
        updated = updated.filter((lang) => lang !== value);
      }
      setUser({ ...user, language: updated });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    dispatch(addUser({ ...user, id: Date.now() }));
    setUser(User);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="border p-2 w-full"
        />
        <p className="text-red-500">{error.firstName}</p>

        <input
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="border p-2 w-full"
        />
        <p className="text-red-500">{error.lastName}</p>

        <input
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 w-full"
        />
        <p className="text-red-500">{error.email}</p>

        <input
          name="dob"
          type="date"
          value={user.dob}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <p className="text-red-500">{error.dob}</p>

        <input
          name="contact"
          value={user.contact}
          onChange={handleChange}
          placeholder="Contact"
          className="border p-2 w-full"
        />
        <p className="text-red-500">{error.contact}</p>

        <select
          name="country"
          value={user.country}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Select Country</option>
          <option value="usa">USA</option>
          <option value="india">India</option>
          <option value="china">China</option>
        </select>
        <p className="text-red-500">{error.country}</p>

        <select
          name="gender"
          value={user.gender}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <p className="text-red-500">{error.gender}</p>

        <div>
          <label>
            <input
              type="checkbox"
              name="language"
              value="English"
              checked={user.language.includes("English")}
              onChange={handleChange}
            />
            English
          </label>
          <label className="ml-4">
            <input
              type="checkbox"
              name="language"
              value="Hindi"
              checked={user.language.includes("Hindi")}
              onChange={handleChange}
            />
            Hindi
          </label>
          <label className="ml-4">
            <input
              type="checkbox"
              name="language"
              value="Gujarati"
              checked={user.language.includes("Gujarati")}
              onChange={handleChange}
            />
            Gujarati
          </label>
        </div>
        <p className="text-red-500">{error.language}</p>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded w-full"
        >
          Submit
        </button>
      </form>

      <h2 className="text-xl font-bold mt-6">Users List</h2>
      <table className="border w-full mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">First Name</th>
            <th className="p-2 border">Last Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((data) => (
              <tr key={data.id}>
                <td className="p-2 border">{data.firstName}</td>
                <td className="p-2 border">{data.lastName}</td>
                <td className="p-2 border">{data.email}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

// ---------------- ROOT APP ----------------
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Registration />
      </PersistGate>
    </Provider>
  );
}

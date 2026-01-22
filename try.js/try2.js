function* numbers() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const iterator = numbers();
  
  console.log(iterator.next().value); // Output: 1
  console.log(iterator.next().value); // Output: 2
  console.log(iterator.next().value); // Output: 3
  console.log(iterator.next().done);  // Output: true
//////////////////////////////////////////////////////
import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Navbar from "./navbar/Navbar";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.role) newErrors.role = "Role is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await axios.post(
        "http://localhost:7070/users/signup",
        formData
      );

      localStorage.setItem("token", response.data.token);
      const { role } = jwtDecode(response.data.token);

      if (role === "superadmin") navigate("/superDashboard");
      else if (role === "admin") navigate("/adminDashboard");
      else navigate("/userDashboard");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        role: "",
      });

      setErrors({});
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div>
      <Navbar />
      <br />

      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Signup</h2>

        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
            setErrors({ ...errors, firstName: "" });
          }}
        />
        <span className="error">{errors.firstName}</span>

        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
            setErrors({ ...errors, lastName: "" });
          }}
        />
        <span className="error">{errors.lastName}</span>

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            setErrors({ ...errors, email: "" });
          }}
        />
        <span className="error">{errors.email}</span>

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
            setErrors({ ...errors, password: "" });
          }}
        />
        <span className="error">{errors.password}</span>

        <select
          value={formData.gender}
          onChange={(e) => {
            setFormData({ ...formData, gender: e.target.value });
            setErrors({ ...errors, gender: "" });
          }}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <span className="error">{errors.gender}</span>

        <select
          value={formData.role}
          onChange={(e) => {
            setFormData({ ...formData, role: e.target.value });
            setErrors({ ...errors, role: "" });
          }}
        >
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="superadmin">Super Admin</option>
        </select>
        <span className="error">{errors.role}</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;

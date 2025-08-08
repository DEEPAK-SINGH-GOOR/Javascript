import React, { useState } from "react";
const CrudApp = () => {
  const initialUser = {
    name: "",
    last: "",
    rollNo: "",
    email: "",
    contact: "",
    gender: "",
    date: "",
    country: "",
    language: [],
    image: "",
  };

  const [user, setUser] = useState(initialUser);
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [errors, setErrors] = useState({});
  const [filters, setFilters] = useState({
    gender: "",
    country: "",
    language: "",
  });

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const inputHandleLanguage = (e) => {
    const { name, value, checked } = e.target;
    if (name === "language") {
      const current = user.language || [];
      let updated = [];

      if (checked) {
        updated = [...current, value];
      } else {
        updated = current.filter((lang) => lang !== value);
      }

      setUser({ ...user, [name]: updated });
    }
  };

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const imgURL = URL.createObjectURL(file);
    setUser({ ...user, image: imgURL });
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = "Name is required!";
    if (!data.last.trim()) errors.last = "Last name is required!";
    if (!data.rollNo.trim()) errors.rollNo = "Roll No is required!";
    if (!data.email.trim()) {
      errors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email!";
    }
    if (!data.contact.trim()) {
      errors.contact = "Contact is required!";
    } else if (data.contact.length !== 10) {
      errors.contact = "Contact must be 10 digits!";
    }
    if (!data.gender) errors.gender = "Gender is required!";
    if (!data.date) errors.date = "DOB is required!";
    if (!data.country) errors.country = "Country is required!";
    if (!data.language || data.language.length === 0) {
      errors.language = "Select at least one language!";
    }
    return errors;
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const formErrors = validateForm(user);
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) return;

    if (editIndex !== null) {
      const updatedList = [...list];
      updatedList[editIndex] = user;
      setList(updatedList);
      setEditIndex(null);
    } else {
      setList([...list, user]);
    }

    setUser(initialUser);
    setErrors({});
  };

  const deleteItem = (index) => {
    const filtered = list.filter((_, i) => i !== index);
    setList(filtered);
  };

  const editItem = (index) => {
    setUser(list[index]);
    setEditIndex(index);
  };

  // ✅ Filtered List based on selected filters
  const filteredList = list.filter((item) => {
    const genderMatch =
      !filters.gender || item.gender === filters.gender;
    const countryMatch =
      !filters.country || item.country === filters.country;
    const languageMatch =
      !filters.language || item.language.includes(filters.language);

    return genderMatch && countryMatch && languageMatch;
  });

  // ✅ UI Render
  return (
    <div>
      <h2>CRUD App</h2>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={user.name}
          onChange={inputHandle}
        />
        {errors.name && <p>{errors.name}</p>}

        <input
          type="text"
          name="last"
          placeholder="Last Name"
          value={user.last}
          onChange={inputHandle}
        />
        {errors.last && <p>{errors.last}</p>}

        <input
          type="text"
          name="rollNo"
          placeholder="Roll No"
          value={user.rollNo}
          onChange={inputHandle}
        />
        {errors.rollNo && <p>{errors.rollNo}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={inputHandle}
        />
        {errors.email && <p>{errors.email}</p>}

        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={user.contact}
          onChange={inputHandle}
        />
        {errors.contact && <p>{errors.contact}</p>}

        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={user.gender === "male"}
            onChange={inputHandle}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={user.gender === "female"}
            onChange={inputHandle}
          />
          Female
          {errors.gender && <p>{errors.gender}</p>}
        </div>

        <input
          type="date"
          name="date"
          value={user.date}
          onChange={inputHandle}
        />
        {errors.date && <p>{errors.date}</p>}

        <select
          name="country"
          value={user.country}
          onChange={inputHandle}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
        {errors.country && <p>{errors.country}</p>}

        <div>
          <label>Language:</label>
          <input
            type="checkbox"
            name="language"
            value="english"
            checked={user.language.includes("english")}
            onChange={inputHandleLanguage}
          />
          English
          <input
            type="checkbox"
            name="language"
            value="hindi"
            checked={user.language.includes("hindi")}
            onChange={inputHandleLanguage}
          />
          Hindi
          <input
            type="checkbox"
            name="language"
            value="spanish"
            checked={user.language.includes("spanish")}
            onChange={inputHandleLanguage}
          />
          Spanish
          {errors.language && <p>{errors.language}</p>}
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={imageHandler}
        />

        <button type="submit">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      {/* ✅ Filter UI */}
      <h3>Filters</h3>
      <select
        name="gender"
        value={filters.gender}
        onChange={(e) =>
          setFilters({ ...filters, gender: e.target.value })
        }
      >
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select
        name="country"
        value={filters.country}
        onChange={(e) =>
          setFilters({ ...filters, country: e.target.value })
        }
      >
        <option value="">All Countries</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
      </select>

      <select
        name="language"
        value={filters.language}
        onChange={(e) =>
          setFilters({ ...filters, language: e.target.value })
        }
      >
        <option value="">All Languages</option>
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
        <option value="spanish">Spanish</option>
      </select>

      {/* ✅ Display Filtered Users */}
      <h3>Users List</h3>
      {filteredList.map((item, index) => (
        <div key={index}>
          <p>
            {item.name} {item.last} ({item.gender}) - {item.country}
          </p>
          <p>Languages: {item.language.join(", ")}</p>
          {item.image && (
            <img
              src={item.image}
              alt="User"
              width="100"
              height="100"
            />
          )}
          <button onClick={() => editItem(index)}>Edit</button>
          <button onClick={() => deleteItem(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CrudApp;

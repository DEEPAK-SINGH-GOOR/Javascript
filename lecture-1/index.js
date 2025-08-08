import { useState } from "react";
import "./Home.css";

const CrudApp = () => {
  const User = {
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

  const [user, setUser] = useState(User);
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [errors, setErrors] = useState({});
  const [filters, setFilters] = useState({});
  const [searchItem, setSearchItem] = useState("");

  const inputHandle = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const inputHandleLanguage = (e) => {
    const { name, value, checked } = e.target;
    if (name === "language") {
      const current = user.language || [];
      const updated = checked
        ? [...current, value]
        : current.filter((lang) => lang !== value);
      setUser({ ...user, language: updated });
    }
  };

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const imgURL = URL.createObjectURL(file);
    setUser({ ...user, image: imgURL });
  };

  const validateForm = (data) => {
    const errors = {};

    // ✅ FIXED: Name must contain only letters
    if (!data.name) {
      errors.name = "First Name is required!";
    } else if (!/^[A-Za-z]+$/.test(data.name)) {
      errors.name = "Only letters allowed in First Name!";
    }

    if (!data.last) errors.last = "Last name is required!";
    if (!data.rollNo) errors.rollNo = "Roll No is required!";
    if (!data.email) {
      errors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email!";
    }
    if (!data.contact) {
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

    setUser(User);
    setErrors({});
  };

  const editItem = (index) => {
    setUser(list[index]);
    setEditIndex(index);
  };

  const deleteItem = (index) => {
    const updated = [...list];
    updated.splice(index, 1);
    setList(updated);
  };

  // ✅ FIXED: Apply search on `list`, not on `user`
  const filteredList = list
    .filter((item) => {
      const Gender = !filters.gender || item.gender === filters.gender;
      const Country = !filters.country || item.country === filters.country;
      const Language =
        !filters.language || item.language.includes(filters.language);
      return Gender && Country && Language;
    })
    .filter((item) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={user.name}
          onChange={inputHandle}
        />
        <span style={{ color: "red" }}>{errors.name}</span>
        <br />

        <input
          type="text"
          name="last"
          placeholder="Last Name"
          value={user.last}
          onChange={inputHandle}
        />
        <span style={{ color: "red" }}>{errors.last}</span>
        <br />

        <input
          type="text"
          name="rollNo"
          placeholder="Roll No"
          value={user.rollNo}
          onChange={inputHandle}
        />
        <span style={{ color: "red" }}>{errors.rollNo}</span>
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={inputHandle}
        />
        <span style={{ color: "red" }}>{errors.email}</span>
        <br />

        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={user.contact}
          onChange={inputHandle}
        />
        <span style={{ color: "red" }}>{errors.contact}</span>
        <br />

        <select name="gender" value={user.gender} onChange={inputHandle}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <span style={{ color: "red" }}>{errors.gender}</span>
        <br />

        <input
          type="date"
          name="date"
          value={user.date}
          onChange={inputHandle}
        />
        <span style={{ color: "red" }}>{errors.date}</span>
        <br />

        <select name="country" value={user.country} onChange={inputHandle}>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="china">China</option>
        </select>
        <span style={{ color: "red" }}>{errors.country}</span>
        <br />

        <label>Languages:</label>
        <label>
          <input
            type="checkbox"
            name="language"
            value="english"
            checked={user.language.includes("english")}
            onChange={inputHandleLanguage}
          />
          English
        </label>
        <label>
          <input
            type="checkbox"
            name="language"
            value="hindi"
            checked={user.language.includes("hindi")}
            onChange={inputHandleLanguage}
          />
          Hindi
        </label>
        <label>
          <input
            type="checkbox"
            name="language"
            value="gujarati"
            checked={user.language.includes("gujarati")}
            onChange={inputHandleLanguage}
          />
          Gujarati
        </label>
        <span style={{ color: "red" }}>{errors.language}</span>
        <br />

        <input type="file" onChange={imageHandler} />
        <br />

        <button type="submit">Submit</button>
      </form>

      <hr />

      <div>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last</th>
            <th>Roll No</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Gender</th>
            <th>Date</th>
            <th>Country</th>
            <th>Languages</th>
            <th>Profile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.last}</td>
              <td>{item.rollNo}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>{item.gender}</td>
              <td>{item.date}</td>
              <td>{item.country}</td>
              <td>{item.language.join(", ")}</td>
              <td>
                <img src={item.image} width="50" height="50" alt="profile" />
              </td>
              <td>
                <button onClick={() => editItem(index)}>Edit</button>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudApp;

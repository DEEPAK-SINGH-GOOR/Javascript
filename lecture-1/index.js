import { useState } from "react";

const LanguageForm = () => {
  const [user, setUser] = useState({ language: [] });
  const [submitted, setSubmitted] = useState([]);

  const inputHandle = (e) => {
    const { name, value, checked } = e.target;

    if (name === "language") {
      const current = user.language || [];
      let updated = [];
    
      if (checked) {
        updated = [...current, value]; // Add value
      } else {
        updated = current.filter((l) => l !== value); // Remove value
      }
    
      setUser({ ...user, language: updated });
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(user.language); // only update on submit
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Select Language:</label><br />
        
        <input
          type="checkbox"
          name="language"
          value="English"
          onChange={inputHandle}
        />
        English

        <input
          type="checkbox"
          name="language"
          value="Hindi"
          onChange={inputHandle}
        />
        Hindi

        <input
          type="checkbox"
          name="language"
          value="Gujarati"
          onChange={inputHandle}
        />
        Gujarati

        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <p>Selected: {submitted.join(", ")}</p>
    </div>
  );
};

export default LanguageForm;








// import { useState } from "react";

// const ImageUploadTable = () => {
//   const [user, setUser] = useState({image: "" });
//   const [list, setList] = useState([]);

//   const imageHandler = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imgURL = URL.createObjectURL(file);
//       setUser({ ...user, image: imgURL });
//     }
//   };

//   const submitHandle = (e) => {
//     e.preventDefault();
//     setList([...list, user]);
//     setUser({ name: "", image: "" });
//   };

//   return (
//     <div>
//       <form onSubmit={submitHandle}>
//         <input type="file" onChange={imageHandler} />
//         <button type="submit">Submit</button>
//       </form>

//       <table border={1}>
//         <thead>
//           <tr>
   
//             <th>Profile Pic</th>
//           </tr>
//         </thead>
//         <tbody>
//           {list.map((item, index) => (
//             <tr key={index}>
//               <td>
//                 <img src={item.image} alt="Profile" width="50" height="50" />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ImageUploadTable;

import { useState } from "react";

export default () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    valid: false
  });
  const [errMsg, setErrMsg] = useState(null);
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "valid") {
      setFormData((state) => ({ ...state, [name]: checked }));
    } else {
      setFormData((state) => ({ ...state, [name]: value }));
    }
    console.log(formData);
  };
  let submitForm = () => {
    const { name, email, password } = formData;

    switch (true) {
      case !name:
        setErrMsg("Name is required");
        break;
      case !email:
        setErrMsg("Email is required");
        break;
      case name.length < 5:
        setErrMsg("Name should be at least 5 character");
        break;
      default:
        setErrMsg(null);
        break;
    }
  };
  return (
    <>
      <div>
        <h2>Home Page {JSON.stringify(formData)}</h2>
        <p>{errMsg}</p>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="valid">Valid</label>
        <input
          type="checkbox"
          id="valid"
          name="valid"
          onChange={handleChange}
        />
        <br />

        <button onClick={submitForm}>Submit</button>
      </div>
    </>
  );
};

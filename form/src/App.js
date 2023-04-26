import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    nickname: "",
    password: "",
    confirmPassword: "",
    phone: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({
    nickname: "",
    password: "",
    confirmPassword: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation logic here
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setFormErrors((prevState) => ({ ...prevState, [name]: "" }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "nickname":
        if (value.trim().length < 3) {
          setFormErrors((prevState) => ({
            ...prevState,
            nickname: "Nickname must be at least 3 characters",
          }));
        }
        break;
      case "password":
        if (
          !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(value) ||
          value.length < 8
        ) {
          setFormErrors((prevState) => ({
            ...prevState,
            password:
              "Password must be at least 8 characters with one lowercase letter, one uppercase letter, and one special character",
          }));
        }
        break;
      case "confirmPassword":
        if (value !== formData.password) {
          setFormErrors((prevState) => ({
            ...prevState,
            confirmPassword: "Passwords do not match",
          }));
        }
        break;
      case "phone":
        if (!/^\d{10}$/.test(value)) {
          setFormErrors((prevState) => ({
            ...prevState,
            phone: "Phone number must be 10 digits",
          }));
        }
        break;
      case "email":
        if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
          value.trim().length === 0
        ) {
          setFormErrors((prevState) => ({
            ...prevState,
            email: "Please enter a valid email",
          }));
        }
        break;
      default:
        break;
    }
  };



  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nickname:
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {formErrors.nickname && (
          <span className="error">{formErrors.nickname}</span>
        )}
      </label>
      <br />
      <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
          {formErrors.email && (
          <span className="error">{formErrors.email}</span>
        )}
      </label>
      <br/>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {formErrors.password && (
          <span className="error">{formErrors.password}</span>
        )}
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {formErrors.confirmPassword && (
          <span className="error">{formErrors.confirmPassword}</span>
        )}
      </label>
      <br />
      <label>
          Phone
          <input type="number" name="phone" onChange={handleChange} onBlur={handleBlur} value={formData.phone} />
          {formErrors.phone && (
          <span className="error">{formErrors.phone}</span>
        )}
       </label>
    
  <br/>

  <button type="submit" className="btn btn-primary">Submit </button>

      </form>
  );
}

export default App;

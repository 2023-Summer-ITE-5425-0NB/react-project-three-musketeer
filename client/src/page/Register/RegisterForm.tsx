import React, { useState } from "react";
import "./Register.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9090/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error occurred while registering", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="register-form"
    >
      <div className="mb-3">
        <label className="form-label">First Name:</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name:</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Date of Birth:</label>
        <input
          type="date"
          name="dateOfBirth"
          className="form-control"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="form-select"
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;

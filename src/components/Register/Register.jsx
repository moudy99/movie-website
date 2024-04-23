import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const formData = {
        email,
        password,
        confirmPassword,
        username,
        age,
      };
      console.log("Form data:", formData);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setUsername("");
      setAge("");
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    let errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      errors.password = "Password must be at least 8 characters, and complex";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (/\s/.test(username)) {
      errors.username = "Username cannot contain spaces";
    }

    if (age !== "" && (isNaN(age) || age < 18)) {
      errors.age = "Age must be a number and at least 18";
    }

    return errors;
  };

  return (
    <div className="register">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="error-message text-danger ">{errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="error-message text-danger ">
              {errors.password}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <span className="error-message text-danger ">
              {errors.confirmPassword}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
          />
          {errors.username && (
            <span className="error-message text-danger ">
              {errors.username}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleAgeChange}
            placeholder="Enter your age"
          />
          {errors.age && (
            <span className="error-message text-danger ">{errors.age}</span>
          )}
        </div>
        <div className="button-container">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

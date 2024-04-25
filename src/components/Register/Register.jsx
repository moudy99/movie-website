import { useState, useContext } from "react";
import "./Register.css";
import LanguageContext from "../../context/LanguageContenxt";

const Register = () => {
  const [language] = useContext(LanguageContext);
  const isArabic = language === "ar";
  const rtlClass = isArabic ? "rtl" : "";

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
      errors.email =
        language === "ar"
          ? "البريد الإلكتروني غير صالح"
          : "Invalid email address";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      errors.password =
        language === "ar"
          ? "يجب أن تكون كلمة المرور على الأقل ٨ أحرف ومعقدة"
          : "Password must be at least 8 characters, and complex";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword =
        language === "ar"
          ? "كلمات المرور غير متطابقة"
          : "Passwords do not match";
    }

    if (/\s/.test(username)) {
      errors.username =
        language === "ar"
          ? "لا يمكن أن يحتوي اسم المستخدم على مسافات"
          : "Username cannot contain spaces";
    }

    if (age !== "" && (isNaN(age) || age < 18)) {
      errors.age =
        language === "ar"
          ? "يجب أن يكون العمر رقمًا وعلى الأقل ١٨"
          : "Age must be a number and at least 18";
    }

    return errors;
  };

  return (
    <div className={`register ${rtlClass}`}>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>{isArabic ? "تسجيل" : "Register"}</h2>
        <div className="form-group">
          <label htmlFor="email">
            {isArabic ? "البريد الإلكتروني" : "Email"}
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={
              isArabic ? "ادخل بريدك الإلكتروني" : "Enter your email"
            }
            required
          />
          {errors.email && (
            <span className="error-message text-danger ">{errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">
            {isArabic ? "كلمة السر" : "Password"}
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder={isArabic ? "ادخل كلمة السر" : "Enter your password"}
            required
          />
          {errors.password && (
            <span className="error-message text-danger ">
              {errors.password}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">
            {isArabic ? "تاكيد كلمة السر" : "Confirm Password"}
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder={isArabic ? "تأكيد كلمة السر" : "Confirm your password"}
            required
          />
          {errors.confirmPassword && (
            <span className="error-message text-danger ">
              {errors.confirmPassword}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="username">
            {isArabic ? "اسم المستخدم" : "UserName"}
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder={isArabic ? "ادخل اسم المستخدم" : "Enter your username"}
            required
          />
          {errors.username && (
            <span className="error-message text-danger ">
              {errors.username}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="age">{isArabic ? "العمر" : "Age"}</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleAgeChange}
            placeholder={isArabic ? "ادخل عمرك" : "Enter your age"}
          />
          {errors.age && (
            <span className="error-message text-danger ">{errors.age}</span>
          )}
        </div>
        <div className="button-container">
          <button type="submit">{isArabic ? "تسجيل" : "Register"}</button>
        </div>
      </form>
    </div>
  );
};

export default Register;

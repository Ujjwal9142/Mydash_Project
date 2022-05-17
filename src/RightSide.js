import React, { useEffect, useState } from "react";
import validator from "validator";
import "./styles/rightside.css";

const RightSide = ({ setIsChartOpen }) => {
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [name, setName] = useState("");
  const [phoneError, setPhoneError] = useState(null);
  const [terms, setTerms] = useState(false);

  useEffect(() => {
    if (password.length > 0 && confirmation.length > 0) {
      if (password === confirmation) {
        setPasswordError(false);
      } else {
        setPasswordError(true);
      }
    }
  }, [password, confirmation]);

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const validatePhoneNumber = (e) => {
    const phoneNumber = e.target.value;

    if (validator.isMobilePhone(phoneNumber)) {
      setPhoneError(false);
    } else {
      setPhoneError(true);
    }
  };

  const checkTerms = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setTerms(true);
    } else {
      setTerms(false);
    }
  };

  const handleCreateClick = () => {
    if (emailError) {
      alert("Invalid email entered!");
      return;
    }
    if (passwordError) {
      alert("Passwords do not match!");
      return;
    }
    if (phoneError) {
      alert("Invalid mobile number entered!");
      return;
    }
    if (name.length === 0) {
      alert("Please enter your name!");
      return;
    }
    if (!terms) {
      alert("Please check terms and conditions!");
      return;
    }
    if (password.length < 6) {
      alert("Minimum password length is 6 characters!");
      return;
    }
    setIsChartOpen(true);
  };

  return (
    <div className="rightside">
      <h1 className="rightside__heading">Create an account</h1>
      <form className="rightside__form">
        <label className="rightside__label" for="email">
          Your email address
        </label>
        <input
          type="email"
          className="rightside__details"
          id="email"
          name="email"
          onChange={(e) => validateEmail(e)}
        />
        <span
          className={
            emailError ? "rightside__email--error" : "rightside__email--noerror"
          }
        >
          *Enter valid Email
        </span>
        <label className="rightside__label" for="password">
          Your password
        </label>
        <input
          type="password"
          className="rightside__details"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className={
            password.length < 6 && password.length !== 0
              ? "rightside__password--error"
              : "rightside__password--noerror"
          }
        >
          *Minimum 6 characters
        </span>
        <label className="rightside__label" for="confirm">
          Confirm your password
        </label>
        <input
          type="password"
          className="rightside__details"
          id="confirm"
          name="confirm"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
        />
        <span
          className={
            passwordError
              ? "rightside__password--error"
              : "rightside__password--noerror"
          }
        >
          *Passwords do not match
        </span>
        <label className="rightside__label" for="name">
          Your full name
        </label>
        <input
          type="text"
          className="rightside__details"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="rightside__label" for="phone">
          Your phone number
        </label>
        <input
          type="tel"
          className="rightside__phone"
          id="phone"
          name="phone"
          onChange={(e) => validatePhoneNumber(e)}
        ></input>
        <span
          className={
            phoneError ? "rightside__phone--error" : "rightside__phone--noerror"
          }
        >
          *Enter valid Phone Number
        </span>
        <div className="rightside__container">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            onClick={(e) => checkTerms(e)}
          />
          <label for="terms"> I read and agree Terms and Conditions</label>
        </div>
      </form>
      <button className="rightside__button" onClick={handleCreateClick}>
        Create account
      </button>
    </div>
  );
};

export default RightSide;

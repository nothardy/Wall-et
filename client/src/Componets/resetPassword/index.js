import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import utterances from "./utterances";
import mistakesManager from "./mistakes";

const Passwords = ({ handleSubmit, step, loading, buttonRef }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState([]);

  const u = utterances;

  const handleInputChange = (e) => {
    const stateManager = e.target.value;
    setInput(stateManager);
    if (step === 3) {
      setError(mistakesManager(stateManager));
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    error.length === 0 && handleSubmit(input, step);
    setInput("");
  };

  const handleInputType = () => {
    switch (step) {
      case 1:
        return "email";
      case 2:
        return "number";
      case 3:
        return "password";
      default:
        return "";
    }
  };

  return (
    <div>
      <div>
        <h3>CHANGE YOUR PASSWORD</h3>
        <p>{utterances.description[step]}</p>
      </div>
      <form onSubmit={formSubmit}>
        <div>
          <label className="form-label" for="email">
            {utterances.label[step]}
          </label>
          <input
            id="email"
            type={handleInputType()}
            value={input}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <button ref={buttonRef} type="submit">
          {loading ? (
            <div role="status">
              <span>Loading...</span>
            </div>
          ) : (
            utterances.button[step]
          )}
        </button>
        <hr />
        <Link to="/index/register">
          <h4>LOGIN!</h4>
        </Link>
        <Link to="/index">
          <h4>SIGN UP</h4>
        </Link>
      </form>
    </div>
  );
};

export default Passwords;
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    // TODO : signin action
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div htmlFor="email">
          Email address
          <input
            type="email"
            placeholder="Enter email"
            required
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div htmlFor="password">
          Email address
          <input
            type="password"
            placeholder="Enter password"
            required
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer? <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

import React from 'react';
import { Link,  } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
    <h1>Login</h1>
    <form>
      <input
        required
        type="text"
        placeholder="username"
        name="username"
        // onChange={handleChange}
      />
      <input
        required
        type="password"
        placeholder="password"
        name="password"
        // onChange={handleChange}
      />
      <button >Login</button>
      {/* <button onClick={handleSubmit}>Login</button> */}
      {/* {err && <p>{err}</p>} */}
      <span>
        Don't you have an account??? <Link to="/register">Register</Link>
      </span>
    </form>
  </div>
  )
}

export default Login
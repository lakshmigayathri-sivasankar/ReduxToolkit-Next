import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import { useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      {!user.name && (
        <div className='p-3'>
          <input
            className='mt-5 mx-auto d-block'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            className=' mx-auto d-block'
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <input
            className=' mx-auto d-block'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      )}
      <div className='text-center mt-5'>
        {!user.name ? (
          <button onClick={() => dispatch(login({ name, age, email }))}>
            Login
          </button>
        ) : (
          <button onClick={() => dispatch(logout())}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Login;

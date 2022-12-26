import React from "react";
import { useSelector } from "react-redux";
function Profile() {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value);

  if (!user.name) {
    return;
  }

  return (
    <div style={{ color: theme }}>
      <h1 className='text-center mt-5'>PROFILE INFO:</h1>
      <div className='card m-5'>
        <h2 className='text-center '>Name:{user.name}</h2>
        <h2 className='text-center '>Age:{user.age}</h2>
        <h2 className='text-center '>email:{user.email}</h2>
      </div>
    </div>
  );
}

export default Profile;

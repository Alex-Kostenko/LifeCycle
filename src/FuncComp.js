import React from 'react';
import useUser from './hooks/useUser'


const CustomHook = () => {

  const [user, getNewUser] = useUser();

  const handleClick = () => {
    getNewUser()
  }
  
  return (
    <div>
      <button onClick={handleClick}> GetNewUser </button><br />
      {user.name} <br/>
      {user.age} 
    </div>

  )
}

export default CustomHook;

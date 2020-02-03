import { useState, useEffect } from "react";

const useUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setUser({name: 'nameUser', age: '55'})
    }, 100);
  }, []);

  const getUser = () => {
    setTimeout(() => {
      setUser({ name: 'newUser', age: '22' })
    }, 100);
  }

  return ([user, getUser]);
}

// const name;
// export default name;
export default useUser;

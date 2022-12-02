import React, { MouseEvent, useEffect, useState } from 'react';
import { getUser } from '../lib/api/user/getUser';

function User() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    console.log(user);
  }, [user]);

  const onClikeGetUser = async (e: MouseEvent<HTMLButtonElement>) => {
    const userData = await getUser(1);
    setUser(userData);
  };
  return <button onClick={onClikeGetUser}>유저 불러오기</button>;
}

export default User;

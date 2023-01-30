import React, { Suspense, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { useQueryMyAccount } from '../hooks/useQueryMyAccount';
const Post = React.lazy(() => import('./Post'));

function User() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQueryMyAccount();
  data && console.log('me =>', data);

  const handleTogglePosts = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2>{data?.username} 님</h2>
      <button onClick={handleTogglePosts}>내가 쓴 글</button>
      {isOpen && (
        <Suspense fallback={<PulseLoader color='#278975' />}>
          {data && <Post userId={data.id} />}
        </Suspense>
      )}
    </div>
  );
}

export default User;

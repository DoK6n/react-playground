import { Suspense } from 'react';
import Posts from './Posts';
import { BarLoader } from 'react-spinners';
import { Post, UserInfo } from '../lib/api/types';
import { getPosts } from '../lib/api/posts/getPosts';

interface Props {
  data: {
    read(): UserInfo;
  };
}

function User({ data }: Props) {
  const user = data.read();

  return (
    <div>
      <div className='title'>
        <span className='userName'>
          {user.name}({user.email})
        </span>{' '}
        님이 작성한 글
      </div>

      <Suspense fallback={<BarLoader color='#278975' />}>
        <Posts data={getPosts({ id: user.id })} />
      </Suspense>
    </div>
  );
}

export default User;

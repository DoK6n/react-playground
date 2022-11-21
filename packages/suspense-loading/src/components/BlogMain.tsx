import { Suspense } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';
import { getUser } from '../lib/api/user/getUser';
import User from './User';

function BlogMain() {
  return (
    <main>
      <Suspense fallback={<ClimbingBoxLoader color='#278975' />}>
        <User data={getUser({ id: 1 })} />
      </Suspense>
    </main>
  );
}

export default BlogMain;

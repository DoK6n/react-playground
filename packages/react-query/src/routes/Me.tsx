import { Suspense } from 'react';
import { HashLoader } from 'react-spinners';
import { useRecoilState } from 'recoil';
import User from '../components/User';
import { useGoBack } from '../hooks/useGoBack';
import { isLoggedInState } from '../store/atoms';

function Me() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const goBack = useGoBack();

  const handleLogOut = () => {
    setIsLoggedIn(false);
    goBack();
  };
  return (
    <div>
      <Suspense fallback={<HashLoader color='#7b86be' />}>
        <button onClick={handleLogOut}>로그아웃</button>
        <User />
      </Suspense>
    </div>
  );
}

export default Me;

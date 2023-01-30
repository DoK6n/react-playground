import { css } from '@emotion/react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoggedInState } from '../store/atoms';

function Root() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const navigate = useNavigate();
  const handleGoMe = () => {
    setIsLoggedIn(true);
    navigate('/me');
  };
  return (
    <div css={blockStyle}>
      {!isLoggedIn && <button onClick={handleGoMe}>로그인</button>}
      <Outlet />
    </div>
  );
}

const blockStyle = css`
  padding: 1rem;
`;

export default Root;

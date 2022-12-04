import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

function Card({ children }: PropsWithChildren) {
  return <div css={cardStyle}>{children}</div>;
}

const cardStyle = css`
  width: 100%;
  height: 4rem;
  min-height: 84px;
  border-radius: 12px;
  box-shadow: 0 0 3px rgb(0 0 0 / 15%);
  display: block;
  margin-bottom: 16px;
  padding: 2rem;
`;

export default Card;

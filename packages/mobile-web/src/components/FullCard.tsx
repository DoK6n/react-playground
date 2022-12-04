import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

function FullCard({ children }: PropsWithChildren) {
  return <div css={docsStyle}>{children}</div>;
}

const docsStyle = css`
  width: 100%;
  border-radius: 12px;
  min-height: 100%;
  box-shadow: 0 0 3px rgb(0 0 0 / 15%);
  display: block;
  padding: 2rem;
`;

export default FullCard;

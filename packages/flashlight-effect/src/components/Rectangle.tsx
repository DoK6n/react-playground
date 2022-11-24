import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  light: number;
  pos: { x: number; y: number };
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
function Rectangle({ light, pos, onClick }: Props) {
  return (
    <>
      <RectangleBlock light={light} data-x={pos.x} data-y={pos.y} onClick={onClick}>
        {light}
      </RectangleBlock>
    </>
  );
}

interface RectangleBlockStyledProps {
  light: number;
}

const RectangleBlock = styled.div<RectangleBlockStyledProps>`
  border: 1px solid #9c9c9c;
  background-color: #242424;
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:hover {
    background-color: #616161d5;
    color: #9c9c9c;
  }
  ${props =>
    props.light &&
    css`
      color: whitesmoke;
      background-color: #afa572d5;
    `}
`;

export default Rectangle;

import React, { useState } from 'react';
import styled from 'styled-components';
import { setCurrentLine, setNextLine, setPreviousLine } from '../utils/rectangleRangeDetector';
import Rectangle from './Rectangle';

interface Props {
  rectCount: number;
}

function Room({ rectCount }: Props) {
  const newArr: number[][] = new Array(rectCount).fill(0).map(a => new Array(rectCount).fill(0));
  const [rects, setRects] = useState<number[][]>(newArr);

  const onClickRect = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const xPos = Number(target.dataset.x);
    const yPos = Number(target.dataset.y);
    console.log('x, y :', xPos, yPos);
    setRects(rect => {
      const result = [...rect].map(y => y).map(x => x.fill(0));

      if (yPos === 0) {
        // y축 최상단
        if (xPos === 0) {
          setCurrentLine(result, xPos, yPos, { isStart: true });
          setNextLine(result, xPos, yPos, { isStart: true });
        } else if (xPos === 19) {
          setCurrentLine(result, xPos, yPos, { isEnd: true });
          setNextLine(result, xPos, yPos, { isEnd: true });
        } else {
          setCurrentLine(result, xPos, yPos);
          setNextLine(result, xPos, yPos);
        }
      } else if (yPos === 19) {
        // y축 최하단
        if (xPos === 0) {
          setPreviousLine(result, xPos, yPos, { isStart: true });
          setCurrentLine(result, xPos, yPos, { isStart: true });
        } else if (xPos === 19) {
          setPreviousLine(result, xPos, yPos, { isEnd: true });
          setCurrentLine(result, xPos, yPos, { isEnd: true });
        } else {
          setPreviousLine(result, xPos, yPos);
          setCurrentLine(result, xPos, yPos);
        }
      } else {
        // y축 중간
        if (xPos === 0) {
          setPreviousLine(result, xPos, yPos, { isStart: true });
          setCurrentLine(result, xPos, yPos, { isStart: true });
          setNextLine(result, xPos, yPos, { isStart: true });
        } else if (xPos === 19) {
          setPreviousLine(result, xPos, yPos, { isEnd: true });
          setCurrentLine(result, xPos, yPos, { isEnd: true });
          setNextLine(result, xPos, yPos, { isEnd: true });
        } else {
          setPreviousLine(result, xPos, yPos);
          setCurrentLine(result, xPos, yPos);
          setNextLine(result, xPos, yPos);
        }
      }
      return result;
    });
  };

  return (
    <RoomArea>
      {rects.map((rect, y) =>
        rect.map((r, x) => <Rectangle light={r} pos={{ x: x, y: y }} key={x} onClick={onClickRect} />),
      )}
    </RoomArea>
  );
}

const RoomArea = styled.div`
  border: 1px solid slategray;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  width: 640px;
`;

export default Room;

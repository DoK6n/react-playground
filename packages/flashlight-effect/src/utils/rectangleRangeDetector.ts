interface IOption {
  isStart?: boolean;
  isEnd?: boolean;
}

export const setCurrentLine = (
  rectangle: number[][],
  x: number,
  y: number,
  option: IOption = { isStart: false, isEnd: false },
) => {
  if (option.isStart) {
    rectangle[y][x] = 1;
    rectangle[y][x + 1] = 1;
  } else if (option.isEnd) {
    rectangle[y][x] = 1;
    rectangle[y][x - 1] = 1;
  } else {
    rectangle[y][x - 1] = 1;
    rectangle[y][x] = 1;
    rectangle[y][x + 1] = 1;
  }

  return rectangle;
};

export const setPreviousLine = (
  rectangle: number[][],
  x: number,
  y: number,
  option: IOption = { isStart: false, isEnd: false },
) => {
  if (option.isStart) {
    rectangle[y - 1][x] = 1;
    rectangle[y - 1][x + 1] = 1;
  } else if (option.isEnd) {
    rectangle[y - 1][x] = 1;
    rectangle[y - 1][x - 1] = 1;
  } else {
    rectangle[y - 1][x - 1] = 1;
    rectangle[y - 1][x] = 1;
    rectangle[y - 1][x + 1] = 1;
  }
  return rectangle;
};

export const setNextLine = (
  rectangle: number[][],
  x: number,
  y: number,
  option: IOption = { isStart: false, isEnd: false },
) => {
  if (option.isStart) {
    rectangle[y + 1][x] = 1;
    rectangle[y + 1][x + 1] = 1;
  } else if (option.isEnd) {
    rectangle[y + 1][x] = 1;
    rectangle[y + 1][x - 1] = 1;
  } else {
    rectangle[y + 1][x - 1] = 1;
    rectangle[y + 1][x] = 1;
    rectangle[y + 1][x + 1] = 1;
  }
  return rectangle;
};

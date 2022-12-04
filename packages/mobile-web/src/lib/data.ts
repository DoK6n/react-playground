export type DataType = {
  id: number;
  title: string | number;
};

export const data: DataType[] = [
  { id: 0, title: 'javascript' },
  { id: 1, title: 'rust' },
  { id: 2, title: 'java' },
  { id: 3, title: 'typescript' },
  { id: 4, title: 'zustand' },
  { id: 5, title: 'recoil' },
  { id: 6, title: 'class' },
  { id: 7, title: 'server' },
  { id: 8, title: 'web' },
  { id: 9, title: 'backend' },
  { id: 10, title: 'front' },
  { id: 11, title: '컴퓨터' },
  { id: 12, title: '커피어반' },
  { id: 13, title: '낙성대' },
  { id: 14, title: '랭스터디카페' },
  { id: 15, title: '고양이' },
  { id: 16, title: '강아지' },
  { id: 17, title: 'cat' },
  { id: 18, title: 568 },
  { id: 19, title: 3500 },
  { id: 20, title: 4500 },
  { id: 21, title: 1234 },
  { id: 22, title: 4356 },
];

export const searchData = (qs: string) => data.filter(d => d.title === qs);

export const getDataById = (id: number) => data.filter(d => d.id === id)[0];

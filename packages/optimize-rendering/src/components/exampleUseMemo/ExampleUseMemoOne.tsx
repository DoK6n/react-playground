import { ChangeEvent, useMemo, useState } from 'react';

const hardCalculate = (number: number) => {
  console.log('어려운 계산!');
  for (let i = 0; i < 999999999; i++) {}
  return number + 10000;
};

const esayCalculate = (number: number) => {
  console.log('쉬운 계산!');
  return number + 1;
};

export default function MemoExam() {
  const [hardNumber, sethardNumber] = useState(1);
  const [easyNumber, setEsayNumber] = useState(1);

  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => hardCalculate(hardNumber), [hardNumber]);
  const esaySum = esayCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type='number'
        value={hardNumber}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          sethardNumber(+e.target.value)
        }
      />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type='number'
        value={easyNumber}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setEsayNumber(+e.target.value)
        }
      />
      <span> + 10000 = {esaySum}</span>
    </div>
  );
}

/*
어려운 계산!
쉬운 계산!
어려운 계산!
쉬운 계산!
어려운 계산!
쉬운 계산!

useMemo 사용
어려운 계산!
쉬운 계산!
쉬운 계산!
쉬운 계산!
쉬운 계산!
*/

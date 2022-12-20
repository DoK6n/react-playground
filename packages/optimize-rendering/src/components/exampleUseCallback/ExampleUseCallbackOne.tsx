import React, { useCallback, useEffect, useState } from 'react';

function CallbackExamOne() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);
  // const someFunction = () => {
  //   console.log(`someFunc: number: ${number}`);
  //   return;
  // };

  // const someFunction = useCallback(() => {
  //   console.log(`someFunc: number: ${number}`);
  //   return;
  // }, []); // 함수 자체를 메모이제이션 했기 때문에 메모이제이션 할 당시 number는 0 이었으므로 아무리 호출 해도 계속 0으로 찍힌다.

  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, [number]); // 의존성 배열있는 값이 변경되면 콜백함수를 새로운 메모리 주소에 할당한다.

  useEffect(() => {
    console.log('someFunction이 변경되었습니다.');
  }, [someFunction]);

  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNumber(+e.target.value)
        }
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default CallbackExamOne;

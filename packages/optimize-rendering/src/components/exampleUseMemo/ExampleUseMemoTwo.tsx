import { ChangeEvent, useEffect, useMemo, useState } from 'react';

export default function MemoExamTwo() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = isKorea ? '한국' : '외국';

  // 객체 타입은 값이 저장된 메모리 주소가 달라서 같은 객체와 같은 값이어도 변경이 됬다 인식되어 다시 초기화 된다.
  // const location = {
  //   country: isKorea ? '한국' : '외국',
  // };

  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국',
    };
  }, [isKorea]);

  useEffect(() => {
    console.log('useEffect!');
  }, [location]);

  return (
    <div>
      <h2>햄최몇?</h2>
      <input
        type='number'
        value={number}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNumber(+e.target.value)
        }
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기기 타자</button>
    </div>
  );
}

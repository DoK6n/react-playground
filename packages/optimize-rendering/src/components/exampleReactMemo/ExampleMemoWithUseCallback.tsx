import { memo, useCallback } from 'react';
import { useState } from 'react';

interface ChildProps {
  name: string;
  tellMe: () => void;
}

/* 
  부모 나이 증가 버튼을 클릭하면 React.memo로 최적화 했음에도 불구하고 자녀도 렌더링이 됨
  그 이유는 자녀 컴포넌트가 tellMe라는 함수를 Props로 받고 있기 때문이다.
  JS에서 함수는 객체의 한 종류이다.
  tellMe 변수에는 함수 객체의 메모리 주소가 할당되어있다.
  따라서 부모컴포넌트가 렌더링이 될때마다 tellMe 변수에는 함수 객체가 들어있는 메모리 주소가 할당이 되기 때문에
  함수 객체가 리렌더링시 메모리주소가 새로 할당되면서 자식또 같이 리렌더링이 되버리는 것이다.

  따라서 이를 해결하기 위해선 useCallback을 사용해서 위 함수를 메모이제이션 해주어야 한다.

*/
const Child = memo(({ name, tellMe }: ChildProps) => {
  console.log('👶🏻 자녀 컴포넌트도 렌더링이 되었네요.');

  return (
    <div style={{ border: '2px solid tomato', padding: '10px' }}>
      <h3>👶🏻 자녀</h3>
      <p>이름: {name}</p>
      <button onClick={tellMe}>나 용돈줘</button>
    </div>
  );
});

function ExampleMemoWithUseCallback() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log('👨‍👩‍👧 부모 컴포넌트가 렌더링이 되었어요.');

  const tellMe = useCallback(() => {
    console.log('길동아 여기 1억원 용돈이다');
  }, []);

  return (
    <div style={{ border: '2px solid navy', padding: '10px' }}>
      <h1>👨‍👩‍👧 부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={'홍길동'} tellMe={tellMe} />
    </div>
  );
}

export default ExampleMemoWithUseCallback;

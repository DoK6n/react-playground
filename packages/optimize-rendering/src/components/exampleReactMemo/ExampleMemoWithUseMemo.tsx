import { memo, useMemo } from 'react';
import { useState } from 'react';

type NameType = {
  lastName: string;
  firstName: string;
};

interface ChildProps {
  name: NameType;
}

const Child = memo(({ name }: ChildProps) => {
  console.log('👶🏻 자녀 컴포넌트도 렌더링이 되었네요.');

  return (
    <div style={{ border: '2px solid tomato', padding: '10px' }}>
      <h3>👶🏻 자녀</h3>
      <p>성: {name.lastName}</p>
      <p>이름: {name.firstName}</p>
    </div>
  );
});

function ExampleMemoWithUseMemo() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log('👨‍👩‍👧 부모 컴포넌트가 렌더링이 되었어요.');

  const name = useMemo(() => {
    return {
      lastName: '홍',
      firstName: '길동',
    };
  }, []);

  return (
    <div style={{ border: '2px solid navy', padding: '10px' }}>
      <h1>👨‍👩‍👧 부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={name} />
    </div>
  );
}

export default ExampleMemoWithUseMemo;

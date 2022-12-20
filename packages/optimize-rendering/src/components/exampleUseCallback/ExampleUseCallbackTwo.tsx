import {
  ChangeEvent,
  CSSProperties,
  useCallback,
  useEffect,
  useState,
} from 'react';

interface BoxProps {
  createBoxStyle: () => CSSProperties;
}

function Box({ createBoxStyle }: BoxProps) {
  const [style, setStyle] = useState<CSSProperties>({});

  useEffect(() => {
    console.log('박스 키우기');
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style} />;
}

function CallbackExamTwo() {
  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);

  // const createBoxStyle = (): CSSProperties => {
  //   return {
  //     backgroundColor: 'pink',
  //     width: `${size}px`,
  //     height: `${size}px`,
  //   };
  // };
  const createBoxStyle = useCallback((): CSSProperties => {
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div
      style={{
        background: isDark ? 'black' : 'white',
      }}>
      <input
        type='number'
        value={size}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSizes(+e.target.value)
        }
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}

export default CallbackExamTwo;

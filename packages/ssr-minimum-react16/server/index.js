/* 
  ignore-styles는 babel이 처리할 수 없는 .scss 파일을 무시할 수 있게 도와줍니다.
*/
require('ignore-styles');

/* 
  preset
    - 바벨은 js 파일을 입력받아 변환하여 결과물 js파일을 출력한다.
    - 자바스크립트 파일을 변환해 주는 작업은 플러그인(plugin) 단위로 이루어진다.
    - 하나의 결과물을 위해 여러개의 플러그인을 활용하여 여러번의 변환과정을 거친다.

  @babel/register : .jsx 파일들은 자바스크립트로 변환(transpile) 해줍니다.
  @babel/preset-env : babel을 실행하기 위해 필요한 플러그인들을 모아놓은 파일입니다.
  @babel/preset-react : JSX로 작성된 코드들을 createElement 함수를 이용한 코드로 변환해 주는 바벨 플러그인이 내장되어 있고, 리액트 애플리케이션을 만들 때 필요한 플러그인들이 있습니다.
*/
require('@babel/register')({
  ignore: [/(node_module)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('./server');

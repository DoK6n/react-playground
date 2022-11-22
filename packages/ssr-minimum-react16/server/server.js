import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDomServer from 'react-dom/server';

import App from '../src/App';

const PORT = 8000;
const app = express();

// 1. 서버에 라우트를 정의해야 합니다. 이번 케이스에선 root 경로에서 리액트 앱이 나오도록 해야합니다.
app.use('^/$', (req, res, next) => {
  /* 
    2. 이제 우리는 build된 index.html 파일을 읽을 것 입니다.
      index.html의 경로와 인코딩 방식(utf-8)을 정의하고, 콜백함수 추가합니다 
  */
  fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
    // 3. 만약 파일을 읽는데 실패하면 에러를 출력합니다.
    if (err) {
      console.error(err);
      return res.status(500).send('Some error happend');
    }
    /*
      4. index.html을 읽는데 성공하면 index.html의 텍스트를 반환합니다.
        replace의 첫번째 인자값인 searchValue에는 마운팅할 포인트인 `<div id="root"></div>`입니다.
        두번째 인자값인 replaceValue에는 리액트앱의 렌더링 결과를 넣어줍니다.

      5. 레이아웃을 서버 측에 렌더링하려면 몇 가지 작업을 해야합니다.
        - react, react-dom/server, APP 컴포넌트 import 하기
        - replaceValue에 받아온 ReactDomServer함수로 App 컴포넌트 렌더링하기
          주의) react18 이전에는 renderToString이 주로 쓰였지만 18부터는 권장되지 않으므로 다른 방식 사용해야함
        - index.js에서 hydration 방식으로 렌더링 해야합니다.
          주의) react18 이전에는 ReactDOM.hydrate() 가 주로 쓰였지만 18부터는 hydrateRoot함수가 도입되었습니다.
    */
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDomServer.renderToString(<App />)}</div>`
      ),
    );
  });
});

/*
  6. 마지막으로 빌드 폴더의 모든 정적 파일을 제공해야합니다.
    이제 정적 파일을 제공할 폴더를 지정해야 합니다.

  7. JSX에 대한 서버 측 지원을 추가해야 하므로 babel을 추가해야 합니다.
    - @babel/preset-env @babel/preset-react @babel/register ignore-styles
*/
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
  console.log(`App launched on http://localhost:${PORT}`);
});

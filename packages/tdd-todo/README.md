# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

---

```sh
pnpm add -D jest ts-jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @babel/preset-react @babel/preset-typescript @babel/preset-env identity-obj-proxy @types/node jest-environment-jsdom@latest @types/jest
```

- jest : 테스트 프레임워크
- ts-jest : Jest에서 Typescript를 사용할 수 있게 해주는 도구
- @testing-library/react : React DOM 테스팅 유틸리티
- @testing-library/jest-dom : DOM 상태 테스트용 도구
- @testing-library/user-event : 사용자처럼 이벤트 발생시키는 도구
- identity-obj-proxy : import한 CSS 모듈 등을 mock 데이터로 사용할 수 있게 해주는 도구

# package.json

```json
"scripts": {
  "prebuild": "npm run test",
  "test": "jest"
},
```

# jest.config.json

```json
{
  "roots": ["<rootDir>/test/"],
  "testEnvironment": "jest-environment-jsdom",
  "moduleNameMapper": {
    "\\.(png|pdf|svg|jpg|jpeg)$": "<rootDir>/test/fileMock.ts",
    "\\.(css|less|svg)$": "identity-obj-proxy"
  },
  "setupFilesAfterEnv": ["<rootDir>/test/setup.ts"],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testMatch": ["<rootDir>/**/*.test.(js|jsx|ts|tsx)"],
  "transformIgnorePatterns": ["<rootDir>/node_modules/", "dist", "build"]
}
```

테스트 환경은 `jsdom`으로 변경하고, `css`와 `svg` 파일은 `identity-obj-proxy`가 처리하도록 했습니다.
마지막으로 `ts`, `tsx` 파일은 `ts-jest`가 처리하도록 설정해줬습니다.

# babel.config.json

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
}
```

# test/setup.ts

```ts
// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom'
```

(test 폴더 내부에 넣어주세요)

`jest.config.json`에서 `setupFilesAfterEnv`에 들어있던 파일입니다.
상술한 것처럼 DOM 상태를 테스트하려면 `jest-dom`이 반드시 필요하니, import 하기 위한 파일을 따로 만들어줬습니다.

혹시 eslint를 사용 중이시라면 설정에 따라 개발 의존성에 추가된 파일 import 하지 말라고 잔소리할 겁니다.
어차피 test는 개발 과정에서만 진행할 거니 조용히 하라고 각주를 추가해줍니다.

# test/fileMock.ts

```ts
module.exports = 'test-file-stub'
```

# test/App.test.tsx

```ts
import { render } from '@testing-library/react'
import App from '../src/App'

describe('Renders main element', () => {
  it('renders tasks', () => {
    const { container } = render(<App />)

    expect(container).toHaveTextContent('공식문서 읽기')
  })
})
```

(test 폴더 내부에 넣어주세요)

간단하게 `main` 엘리먼트가 있는지 확인하는 테스트 코드를 작성했습니다.

```sh
npm run test
```

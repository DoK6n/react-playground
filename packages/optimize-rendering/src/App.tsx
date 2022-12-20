import { useState } from 'react';
import './App.css';
import ExampleMemoWithUseCallback from './components/exampleReactMemo/ExampleMemoWithUseCallback';
import ExampleMemoWithUseMemo from './components/exampleReactMemo/ExampleMemoWithUseMemo';
import ExampleReactMemoOne from './components/exampleReactMemo/ExampleReactMemoOne';
import CallbackExamOne from './components/exampleUseCallback/ExampleUseCallbackOne';
import CallbackExamTwo from './components/exampleUseCallback/ExampleUseCallbackTwo';
import MemoExamOne from './components/exampleUseMemo/ExampleUseMemoOne';
import MemoExamTwo from './components/exampleUseMemo/ExampleUseMemoTwo';

function App() {
  return (
    <div className='App'>
      {/* <MemoExamOne /> */}
      {/* <MemoExamTwo /> */}
      {/* <CallbackExamOne /> */}
      {/* <CallbackExamTwo /> */}
      {/* <ExampleReactMemoOne /> */}
      {/* <ExampleMemoWithUseMemo /> */}
      <ExampleMemoWithUseCallback />
    </div>
  );
}

export default App;

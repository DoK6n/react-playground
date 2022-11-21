import { useState } from 'react';
import BlogMain from './components/BlogMain';
import './App.css';

function App() {
  const [on, setOn] = useState(false);

  return (
    <div className='App'>
      <h1>Suspense Example</h1>
      <button onClick={() => setOn(on => !on)}>{on ? 'Suspense 끄기' : 'Suspense 켜기'}</button>
      <hr />
      {on ? (
        <div className='card'>
          <BlogMain />
        </div>
      ) : null}
    </div>
  );
}

export default App;

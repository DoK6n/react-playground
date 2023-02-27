import { useState } from 'react';
import './App.css';
import { useBoundStore } from './store/useBoundStore';

function App() {
  // const searchFilterState = useBoundStore((state) => state.searchFilterState);
  // const postState = useBoundStore((state) => state.postState);
  const { searchFilterState, postState, fetchPost, setPostId, setUserId } =
    useBoundStore();

  return (
    <div className='App'>
      <div className='search-filter-box'>
        <div className='search-filter-item'>
          <label>users</label>
          <select>
            <option value={searchFilterState.userId}>
              {searchFilterState.userId}
            </option>
          </select>
        </div>
        <div className='search-filter-item'>
          <label>posts</label>
          <select>
            <option value={searchFilterState.postId}>
              {searchFilterState.postId}
            </option>
          </select>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;

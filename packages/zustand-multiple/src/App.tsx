import { useState } from 'react';
import './App.css';
import { useBoundStore } from './store/useSearchPostsStore';

function App() {
  // const searchFilterState = useBoundStore((state) => state.searchFilterState);
  // const postState = useBoundStore((state) => state.postState);
  const { searchFilter, fetchPosts, posts, setPostId, setUserId } =
    useBoundStore();

  return (
    <div className='App'>
      <div className='search-filter-box'>
        <div className='search-filter-item'>
          <label>users</label>
          <select>
            <option value={searchFilter.userId}>{searchFilter.userId}</option>
          </select>
        </div>
        <div className='search-filter-item'>
          <label>posts</label>
          <select>
            <option value={searchFilter.postId}>{searchFilter.postId}</option>
          </select>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;

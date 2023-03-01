import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import './App.css';
import { Post } from './lib/api/types';
import { useBoundStore } from './store/useSearchPostsStore';

const filterItems = {
  userId: [0, 1, 2, 3, 4, 5],
  postId: [0, 1, 2, 3, 4, 5],
};

function App() {
  // const searchFilterState = useBoundStore((state) => state.searchFilterState);
  // const postState = useBoundStore((state) => state.postState);
  const { searchFilter, fetchPosts, posts, setPostId, setUserId } =
    useBoundStore();

  const handleUserIdFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectItem = +e.target.value;
    setUserId(selectItem);
  };

  const handlePostIdFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectItem = +e.target.value;
    setPostId(selectItem);
  };

  return (
    <div className='App'>
      <div className='search-filter-box'>
        <div className='search-filter-item'>
          <label>users</label>
          <select onChange={handleUserIdFilterChange}>
            {filterItems.userId.map((userId) => (
              <option key={userId} value={userId}>
                {userId}
              </option>
            ))}
          </select>
        </div>
        <div className='search-filter-item'>
          <label>posts</label>
          <select onChange={handlePostIdFilterChange}>
            {filterItems.postId.map((postId) => (
              <option key={postId} value={postId}>
                {postId}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.id}. {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

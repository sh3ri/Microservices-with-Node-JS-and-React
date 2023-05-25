import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
  const [posts, setPosts] = useState([]);

  async function refreshPosts() {
    const res = await axios.get('http://localhost:4002/posts');
    setPosts(res.data);
  }

  useEffect(() => {
    refreshPosts()
    // const res = await axios.get('http://localhost:4002/posts');
    // setPosts(res.data);
  }, []);

  return (
    <div className="container">
      <h1>Create Post</h1>
      {/* <PostCreate setPosts={setPosts} /> */}
      <PostCreate refreshPosts={refreshPosts} />
      <hr />
      <h1>Posts</h1>
      {/* <PostList posts={posts} setPosts={setPosts}/> */}
      <PostList posts={posts} refreshPosts={refreshPosts}/>
    </div>
  );
};

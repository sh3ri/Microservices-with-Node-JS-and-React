import React, { useState } from 'react';
import axios from 'axios';

export default ({setPosts, refreshPosts }) => {
  const [title, setTitle] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:4000/posts', {
      title,
    });

    setTitle('');

    // const res = await axios.get('http://localhost:4002/posts');
    // setPosts(res.data);
    refreshPosts()
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

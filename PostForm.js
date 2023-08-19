// PostForm.js - 1

import React, { useContext, useState } from "react";
import { BlogContext } from "./BlogContext";

const PostForm = () => {
  const { dispatch } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };
    dispatch({ type: "ADD_POST", payload: newPost });
    setTitle("");
    setContent("");
  };
  
  // PostForm.js - 1  

  return (
    <div className='post-form'>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder='Content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type='submit'>Add Post</button>
      </form>
    </div>
  );
};

export default PostForm;

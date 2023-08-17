import React, { useContext } from "react";
import { BlogContext } from "./BlogContext";
import Post from "./Post";

const PostList = () => {
  const { state } = useContext(BlogContext);

  return (
    <div className='post-list'>
      {state.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;

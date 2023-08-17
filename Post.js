import React, { useContext, useState } from "react";
import { BlogContext } from "./BlogContext";

const Post = ({ post }) => {
  const { dispatch } = useContext(BlogContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch({
      type: "EDIT_POST",
      payload: { ...post, title: editedTitle, content: editedContent },
    });
    setIsEditing(false);
  };

  return (
    <div className='post'>
      {isEditing ? (
        <>
          <input
            type='text'
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Post;

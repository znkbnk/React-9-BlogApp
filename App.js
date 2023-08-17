import React from "react";
import "./App.css";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { BlogProvider } from "./BlogContext";

function App() {
  return (
    <BlogProvider>
      <div className='App'>
        <h1>Advanced Blog</h1>
        <PostForm />
        <PostList />
      </div>
    </BlogProvider>
  );
}

export default App;

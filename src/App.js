import { PostsProvider } from './context/PostContext';
import PostList from './components/PostList'
import AddPostForm from './components/AddPostForm';
import './App.css'
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const removePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <PostsProvider value={{posts, addPost, removePost}}>
      <div className='principal'>
        <h1 className='title'>Post</h1>
        <PostList />
        <AddPostForm />
      </div>
    </PostsProvider>

  );
}

export default App;
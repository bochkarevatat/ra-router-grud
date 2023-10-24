import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './components/Pages/CreatePost';
import HomePage from './components/Pages/HomePage';
import ViewPostPage from './components/Pages/ViewPostPage';

function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({id:0, content: '', created: ''})

  useEffect( () => {
    getPosts();
  }, []);

  async function getPosts() {
    let promise = fetch('http://localhost:7070/posts');
    promise.then( res => res.json())
    .then( json => setPosts(json))          
    .catch( err => {
      console.error(err);
    });
  }  

  async function removePost(id) {
    await fetch(`http://localhost:7070/posts/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    }); 
    getPosts();
  }

  async function updatePost(id, content) {    
    if (!content) {
      return;
    }
    const newPost = {
      id: id,
      content: content      
    }
    await fetch(`http://localhost:7070/posts/${id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
      body: JSON.stringify(newPost)
    }); 
    getPosts();
  }

  async function addPost(content) {    
    if(!content) {
      return;
    }
    const newPost = {
      id: 0,
      content: content      
    }

    await fetch('http://localhost:7070/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
      body: JSON.stringify(newPost)
    });

    getPosts();
  }
  
  function getDate(created) {
    const date = new Date(created).toLocaleDateString();
    return date;
  }

  return (  
   <BrowserRouter>
    <div className="app">
      <Routes>
          
          <Route path="/" element={<HomePage posts={posts} getDate={getDate}/>} />
          <Route path="/posts/new" element={<CreatePost addPost={addPost} />} />
          <Route path="/posts/:id" element={<ViewPostPage id={post.id} updatePost={updatePost} removePost={removePost} getDate={getDate}/>} />
          
      </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
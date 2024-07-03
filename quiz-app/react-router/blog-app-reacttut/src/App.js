import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import EditPost from './EditPost';
import { format } from 'date-fns';
import  api from './posts'
import './index.css';
import axios from 'axios';
import useWindowSize from './Hooks/useWindowSize';
import useAxiosFetch from './Hooks/useAxiosFetch';
import DataProvider from './DataContext'

const App = () => {
  

      const [posts, setPosts] = useState([]);
      const [search, setSearch] = useState('');
      const [searchResults, setSearchResults] = useState([]);
      const [postTitle, setPostTitle] = useState('');
      const [postBody, setPostBody] = useState('');
      const [editTitle, setEditTitle] = useState('');
      const [editBody, setEditBody] = useState('');
      const navigate = useNavigate();
      const {width}=useWindowSize(); // Ensured Router is wrapping App
      const {data,fetchError,loading}=useAxiosFetch('http://localhost:3500/posts')
    
      // Fetching posts
      //Get Endpoint
      useEffect(() => {
        setPosts(data);
    
      }, [data]);
    
      // Search functionality
      useEffect(() => {
        const filteredResults = posts.filter(
          (post) =>
            post.body.toLowerCase().includes(search.toLowerCase()) ||
            post.title.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(filteredResults)
      })
      
  //Put Endpoint
  // Handle edit of a post
  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map((post) => (post.id === id ? { ...response.data } : post)));
      setEditTitle('');
      setEditBody('');
      navigate('/');
    } catch (err) {
      console.error(`Error editing post: ${err.message}`);
    }
  };

  // Handle deletion of a post
  //delete endpoint
  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const remainingPosts = posts.filter((post) => post.id !== id);
      setPosts(remainingPosts);
      navigate('/');
    } catch (err) {
      console.error(`Error deleting post: ${err.message}`);
    }
  };

  // Handle creation of a new post
  //Post endpoint
  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };

    try {
      const response = await api.post('/posts', newPost);
      setPosts([...posts, response.data]);
      setPostTitle('');
      setPostBody('');
      navigate('/')
    } catch (err) {
      console.error(`Error creating post: ${err.message}`);
    }
  };

  return (
    <>
      <div className="App">
  
        <Header title="Ali's React Blog" width={width}/>
        <Nav search={search} setSearch={setSearch} />

        <Routes>
          <Route path="/" element={<Home posts={searchResults}
          fetchError={fetchError}
          loading={loading} />} />
          <Route path="/post/new" element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} />} />
          <Route path="/post/:id" element={<EditPost posts={posts} handleEdit={handleEdit} editTitle={editTitle} setEditTitle={setEditTitle} editBody={editBody} setEditBody={setEditBody} />} />
          <Route path="/posts/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>

        <Footer />
     
      </div>
      </>

  );
};

export default App;

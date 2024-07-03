import React, { useState, useEffect } from 'react';
import { BrowserRouter as Switch, Routes, Route, Router ,useHistory, BrowserRouter} from 'react-router-dom';
import { unstable_HistoryRouter } from 'react-router-dom';
import { useHref } from 'react-router-dom';
import { useHref } from 'react-router-dom';
import { unstable_HistoryRouter } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import './index.css';

 

const App = () => {
  const [posts, setPosts] = useState([]);
  //states
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const[postTitle,setPostTitle]=useState('');
  const[postBody,setPostBody]=useState('')
  const history = useHistory();

  useEffect(()=>{
   const filteredResults=posts.filter((post)=>(post.body).toLocaleLowerCase() || (post.title).toLowerCase()).includes(search.toLowerCase());
   setSearchResults(filteredResults)
   
   
  },[posts,search])

  //functions
  const handleDelete=(id)=>{
    const deletePost = posts.filter((post)=>post.id !== id);
    setPosts(deletePost);
    history.push('/');
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    const id = posts.length ? [posts.length - 1].id + 1 :1
    const datetime='MMMM dd, yyyy pp';
    const newPost={id,title:postTitle,datetime,body:postBody}
    const allPosts=[...posts,newPost]
    setPosts(allPosts);
    setPostBody('');
    setPostTitle('')
    history.push('/');
    
    
  }

  return(
   <BrowserRouter>

    <div className="App">
      <Header title="Ali's React Blog"/>
      <Nav search={search}
      setSearch={setSearch}/>

      <Routes>

        <Route exact path='/'>
          <Home posts={searchResults}/>
        </Route>

        <Route exact path='/post'>
          <NewPost
          handleSubmit={handleSubmit}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody}/>
        </Route>

        <Route path='/post/:id'>
          <PostPage 
          posts={posts}
          handleDelete={handleDelete}/>
        </Route>

        <Route path='/about' Component={About}/>

        <Route path='*' Component={Missing}/>

      </Routes>
      <Footer/>
      </div>
      </BrowserRouter>
 

  )

}
export default App;
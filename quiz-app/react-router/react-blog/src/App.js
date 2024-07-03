import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Router ,unstable_HistoryRouter} from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import './index.css'
const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      dateTime: "July 01 11:17:36 AM",
      body: "Ali alhadi develop huge websites with avery good user experience"
    },
    {
      id: 2,
      title: "C# ASP.Net Project",
      dateTime: "July 01 11:17:36 AM",
      body: "Developing Web Api's with Asp.net Core "
    },
    {
      id: 3,
      title: "Gym Boy",
      dateTime: "July 01 11:17:36 AM",
      body: "Video of al5aal benching 100kg on the bench press"
    }
  ]);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  return(
   <Router>

    <div className="App">
      <Header title="Ali's React Blog"/>
      <Nav search={search}
      setSearch={setSearch}/>

      <Routes>
        <Route exact path='/'>
          <Home posts={posts}/>
        </Route>

        <Route exact path='/post'>
          <NewPost/>
        </Route>

        <Route path='/post/:id'>
          <PostPage/>
        </Route>

        <Route path='/about' Component={About}/>

        <Route path='*' Component={Missing}/>

      </Routes>
      <Footer/>
      </div>
      </Router>
 

  )

}
export default App;
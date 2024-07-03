import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NewPost from './NewPost';
import Post from './Post';
import PostPage from './PostPage';
import Missing from './Missing';
import EditPost from './EditPost';




const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:'/post/new',
        element:<NewPost/>
      },
      {
        path:"/post/:id",
        element:<EditPost/>
      },
      {
        path:"/posts/:id",
        element:<PostPage/>
      },
      {
        path:"/about",
        element:<About/>
      },{
        path:"*",
        element:<Missing/>
      }
      //<Route path="/" element={<Home posts={searchResults} />} />
      //<Route path="/post/new" element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} />} />
      //<Route path="/post/:id" element={<EditPost posts={posts} handleEdit={handleEdit} editTitle={editTitle} setEditTitle={setEditTitle} editBody={editBody} setEditBody={setEditBody} />} />
      //<Route path="/posts/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
      //<Route path="/about" element={<About />} />
     // <Route path="*" element={<Missing />} />
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)



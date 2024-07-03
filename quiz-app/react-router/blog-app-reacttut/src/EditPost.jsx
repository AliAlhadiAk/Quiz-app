import React from 'react';
import { useEffect } from 'react';
import { useLinkClickHandler, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const EditPost = ({posts,handleEdit,editBody,setEditBody,editTitle,setEditTitle}) => {
    const {id} =useParams();
    const post = posts.find((p) => p.id.toString() === id);

    useEffect(()=>{
      if(post){
        setEditTitle(post.title)
        setEditBody(post.body)
        
      }
    },[post,setEditBody,setEditTitle])

  return (
    
  <main className='NewPost'>
   
    {editTitle &&
     <>
  <h2>Edit Post</h2>
  <form onSubmit={(e)=>e.preventDefault()} className='newPostForm'>
    
   <label htmlFor='postTitle'>Title:</label>
   <input
   id='postTitle'
   type='text'
   required
   value={editTitle}
   onChange={(e)=>setEditTitle(e.target.value)}/>
   <label htmlFor='postBody'>Post:</label> 
     
   <textarea
   id='postBody'
   required
   value={editBody}
   onChange={(e)=>setEditBody(e.target.value)}/>
   <button type='submit' onClick={()=>handleEdit(post.id)}>Submit</button>
   <Link to={`/posts/${id}`}><button className='dButton'>Delete Post</button></Link>

 </form> 

</>
}
{!editTitle &&
<>
   <h2>No Posts Found</h2>
   <p>Well that's dissapointing</p>
   <p>
    <Link to='/'>Visit Our Home Page</Link>
   </p>
</>}
</main>
    
  )
}

export default EditPost

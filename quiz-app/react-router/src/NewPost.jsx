import React from 'react'

const NewPost = ({postBody,setPostBody,postTitle,setPostTitle,handleSubmit}) => {
  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit} className='newPostForm'>
        
       <label htmlFor='postTitle'>Title:</label>
       <input
       id='postTitle'
       type='text'
       required
       value={postTitle}
       onChange={(e)=>setPostTitle(e.target.value)}/>
       <label htmlFor='postBody'>Post:</label> 
         
       <textarea
       id='postBody'
       required
       value={postBody}
       onChange={(e)=>e.target.value}/>
       <button type='submit'>Submit</button>

     </form> 
   </main>
  )
}

export default NewPost

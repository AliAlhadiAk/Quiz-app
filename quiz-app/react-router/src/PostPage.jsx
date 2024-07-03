import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Missing from './Missing';

const PostPage = ({posts,handleDelete}) => {
  const { id }=useParams();
  const post= posts.find(post=>(post.id).toString() === id);

  return (
    <main className='PostPage'>
      <article className='post'>
        {post &&
        <>
         <h2>{post.title}</h2>
         <p className='postDate'>{post.datetime}</p>
         <p className='postBody'>{post.body}</p>
         <button onClick={()=> handleDelete(post.id)}>Delete Post</button>
        </>}
        {
          !post &&
          <Missing/>
        }
      </article>

    </main>
  )
}



export default PostPage

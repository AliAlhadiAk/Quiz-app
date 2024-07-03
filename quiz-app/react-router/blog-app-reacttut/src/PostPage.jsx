import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams();
    // Ensure consistent data types. Converting `id` to a number or string as needed
    const post = posts.find((p) => p.id.toString() === id);
    
    return (
        <main className="PostPage">
            <article className="post">
            {post ? (
  <>
    <h2>{post.title}</h2>
    <p className="postDate">{post.datetime}</p>
    <p className="postBody">{post.body}</p>
    <Link to={`/post/${post.id}`}><button className="editButton">EditPost</button></Link>
    <button className="deleteButton" onClick={() => handleDelete(post.id)}>Delete Post</button>
  </>
) : (
  <>
    <h2>Post Not Found</h2>
    <p>Well, that's disappointing.</p>
    <p>
      <Link to="/">Visit Our Homepage</Link>
    </p>
  </>
)}

            </article>
        </main>
    )
}

export default PostPage
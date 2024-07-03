import { useContext } from 'react';
import Feed from './Feed';
import DataContext from './DataContext';


const Home = ({ posts,fetchError,loading }) => {
  
    return (
        <main className='Home'>
       {loading && <p className='statusMsg'>Loading Posts....</p>}
       {fetchError && <p className='statusMsg' style={{color:"red"}}>{fetchError}</p>}
       {!loading && !loading && (posts.length ? <Feed posts={posts}/>:<p className="statusMsg">No posts to Display</p>)}
       </main>
    )
}

export default Home
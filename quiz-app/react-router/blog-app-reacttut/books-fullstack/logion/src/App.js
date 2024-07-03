import Register from './Register';
import './App.css';
import Login from './Login'
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';

function App() {
  return (
    <>
<Router>
<main></main>
  <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>
    
    </Router>
    
    </>
  );
}

export default App;

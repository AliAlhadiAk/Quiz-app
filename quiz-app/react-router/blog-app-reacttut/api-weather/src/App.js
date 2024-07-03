
import './App.css';
import Search from './Components/seach/search';

const onSearchChange =(searchData)=>{
  console.log(searchData)
}

function App() {
  return (
    <div className="container">
      <Search
      onSearchChange={onSearchChange}/>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { useSelector } from 'react-redux';
import httpRequest from './services/httpRequest';

import Spinner from './components/Spinner';

function App() {
  const [posts, setPosts] = useState([]);
  const isLoading = useSelector(state => state.app.isLoading)

  const handleFetchTodo = async () =>  {
    try {
      const { data }  = await httpRequest.get('/posts1', {
        showSpinner: true
      });
      setPosts(data)
    } catch(error) {
      // do something
    }
  
  }

  return (
    <>
      {isLoading && <Spinner />}
      <div className="App">
        <h1>Demo axios interceptor</h1>
        <div>
          Fetch todo <button type="button" onClick={handleFetchTodo}>submit</button>
        </div>
        <ul>
          {posts.length > 0 && posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
      
    </>
    
  );
}

export default App;

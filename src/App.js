import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

const URL = 'https://cat-fact.herokuapp.com/facts';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    axios.get(URL)
    .then((response) => {
      setError(null);
      setIsLoaded(true);
      setFacts(response.data);
    }).catch (error => {
      alert(error);
    });
  }, [])

  if (error) {
    return <p>{error.message}</p>
  } else if (!isLoaded) {
    return <p>Loading...</p>
  } else {
  return (
    <div>
      <h1>Cat Facts</h1>
      {facts.map(fact =>(
        <div className='facts'>
          <p>{fact.text}</p>
        </div>
      ))}
    </div>
  );
}
}

export default App;

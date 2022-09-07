import { useState, useEffect } from 'react'; // Destructuring
import axios from 'axios'; // Similar to $.ajax

function App () {
 
  const [creatureList, setCreatureList] = useState([
  ]);

  useEffect(() => {
    console.log('useEffect - page load');
    fetchCreatures();
  }, []); // More on the [] later
  
  const fetchCreatures = () => {
    axios({ // $.ajax
      method: 'GET',
      url: '/creature',
    }).then(response => {
      // Our array is response.data
      setCreatureList(response.data);
    }).catch(error => {
      console.log(error);
      alert('Something went wrong!');
    });
  }

  return (
    <div>
      <ul>
        {creatureList.map(creature => (
          <li key={creature.name}>
            {creature.name} is from {creature.origin}
          </li>
        ))}
      </ul>
    </div>
  );

}

export default App

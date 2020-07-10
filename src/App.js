import React , { useEffect, useState}from 'react';

import './App.css';


const App = () => {

    const API_ID = '9cb3bd71';
    const API_KEY = 'f5c0a977437018245c474c0d10b3a773';

  
    const [recipes, setRecipes] = useState([]);

  useEffect( () => {

    getRecipes();
  }, []);


  const getRecipes = async () => {

    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();

    // console.log(data.hits);
    setRecipes(data.hits)

  }


  return (
    <div className="App">
      <form className='searc-form'>
        <input className='search-bar' type='text' />
        <button className='search-button'>
          Search
        </button>
      </form>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';

import Recipe from './components/recipe.component';

import './App.css';


const App = () => {



  const API_ID = '9cb3bd71';
  const API_KEY = 'f5c0a977437018245c474c0d10b3a773';

  //declaring state
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('burger')



  useEffect( () => {
    getRecipes() 
  }, [query]);




  const getRecipes = async () => {

    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();

    console.log(data.hits);
    setRecipes(data.hits)

  }


  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (
    <div className="App">
        <div className='header'>
          <h2>RECIPE SEARCH APPLICATION</h2>
        </div>
      <form className='search-form' onSubmit={getSearch} >
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-button'>
          <b>SEARCH</b>
        </button>
      </form>
      <div className='recipes'>
        {recipes.map(item => (
          <Recipe
            key={item.recipe.label}
            title={item.recipe.label}
            calories={item.recipe.calories}
            image={item.recipe.image}
            ingredients={item.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

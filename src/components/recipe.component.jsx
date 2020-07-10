import React from 'react';


import './recipe.style.css'


const Recipe = ({title , calories , image , ingredients}) => {
    return (
        <div className='recipe' >
            <h1>{title}</h1>
            <ol>
                {ingredients.map( ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories - {calories}</p>
            <img className='images' src={image} alt='' />  
        </div>
    );
};

export default Recipe;
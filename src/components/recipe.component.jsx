import React from 'react';


import './recipe.style.css'


const Recipe = ({title , calories , image , ingredients}) => {
    return (
        <div className='recipe' >
            <h2 className='title'>{title}</h2>
            <ul>
                <h3><i>INGREDIENTS</i></h3>
                {ingredients.map( ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p className='calories'>Calories : {calories}</p>
            <img className='images' src={image} alt='' />  
        </div>
    );
};

export default Recipe;
import React from 'react';
import classes from'./Recipe.module.css';

const Recipe = ({title,calories,image,ingredients }) => {
    return (
        <div className={classes.Card}>
            <h1 className={classes.CardTitle}>{title}</h1>
            <img className={classes.CardImg} src={image} alt=""/>
            <p className={classes.CardCalories}>calorie  of the dish {calories} Kcal</p>
            <div className={classes.Ingredients}>
            <ul>{ingredients.map((ingredient, index) => (
                 <li className={classes.CardIngredient} key={index}>{ingredient.text}</li>
             ))}</ul>
            </div>
            
        </div>
    )
}

export default Recipe;
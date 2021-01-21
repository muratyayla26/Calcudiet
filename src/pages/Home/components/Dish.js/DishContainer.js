import React from 'react'
import styles from './_dish.module.scss'
import DishList from './DishList.js'
import DishCard from './DishCard'

function DishContainer() {
    return (
        <div className={styles.dishContainer}>
        <h2>
        Most Liked Dishes
        </h2>
        <div className={styles.cardListContainer}>
            
            <DishList/>
            </div>
        </div>
    )
}

export default DishContainer

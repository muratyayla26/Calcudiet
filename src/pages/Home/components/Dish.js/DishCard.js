import {useEffect} from 'react';
import styles from './_dish.module.scss'

function DishCard({img,title,desc}) {


    

    return (
    <div className={`${styles.dishCard} dishCard`}>
        <img src={img} />
        <h4>{title}</h4>
        <p>{desc}</p>
    </div>
    )
}

export default DishCard

import {useEffect} from 'react';
import styles from './_dish.module.scss'
import soup from '../../img/soup.jpg'
import salad from '../../img/salad.jpg'
import seafood from '../../img/seafood.jpg'
import DishCard from './DishCard'

function DishList() {
    

    const dishes =[
        {img:salad,
        title:'Jello Salad',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
        {img:soup,
        title:'Chowder Soup',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
        {img:seafood,
        title:'Sea Bream',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'},
    ]

    useEffect(() => {
        function animations() {
          document.addEventListener("scroll", function (e) {
            if(document.querySelector(".dishList")){
            let top = window.pageYOffset + window.innerHeight,
              isVisible =
                top > document.querySelector(".dishList").offsetTop;
    
            if (isVisible) {
              document
                .querySelector(".dishList")
                .classList.add("animate-dish");
              document
                .querySelector(".home-about-paragraph")
                .classList.add("animate-about");
            }
          }
          });
        }
        animations();
      }, []);


    return (
        <div className={`${styles.dishList} dishList`}>
        {dishes.map((i)=>(
            <DishCard key={i.title} img={i.img} title={i.title} desc={i.desc} />
        ))}
        </div>
    )
}

export default DishList

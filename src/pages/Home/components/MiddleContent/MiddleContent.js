import {useEffect} from 'react';
import styles from './_middlecontent.module.scss'
import apple from '../../img/apple.png'
import Fade from 'react-reveal/Fade';

function MiddleContent() {


    // useEffect(() => {
    //     function animations() {
    //       document.addEventListener("scroll", function (e) {
    //         if(document.querySelector(".textContainer")){
    //         let top = window.pageYOffset + window.innerHeight,
    //           isVisible =
    //             top > document.querySelector(".textContainer").offsetTop;
    
    //         if (isVisible) {
    //           document
    //             .querySelector(".textContainer")
    //             .classList.add("animate-about");
    //           document
    //             .querySelector(".middleImg")
    //             .classList.add("animate-middle");
    //         }
    //       }
    //       });
    //     }
    //     animations();
    //   }, []);



    return (
        <div className={styles.middleContainer}>
            <div className={`${styles.textContainer} textContainer`}>
              <Fade duration={3000}>

            <h4 className={styles.middleheader} >Stay healthy stay fit</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              </Fade>
            </div>
            <img className={styles.midImg} src={apple} alt="apple"/>
            <h4 className={styles.middleheaderMobile}>Stay healthy stay fit</h4>

        </div>
    )
}

export default MiddleContent

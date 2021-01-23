import styles from './_middlecontent.module.scss'
import dietplate from '../../img/dietplate.png'
import Fade from 'react-reveal/Fade';

function SecondMiddleContent() {
    return (
        <div className={styles.middleContainer}>
        <img className={styles.secMidImg} src={dietplate} alt="apple"/>
        <div className={`${styles.secTextContainer} textContainer`}>
          <Fade duration={3000}>

        <h4 className={styles.middleheader} >You are what you eat</h4>
        <p className={styles.secMidParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.. </p>
          </Fade>
        </div>
        <h4 className={styles.middleheaderMobile}>Stay healthy stay fit</h4>

    </div>
    )
}

export default SecondMiddleContent

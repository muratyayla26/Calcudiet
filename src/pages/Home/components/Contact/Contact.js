import styles from './_contact.module.scss'

function Contact() {
    return (
        <div className={styles.contactContainer}>
            <h2>Contact</h2>
            <form className={styles.contactForm}>
                <input placeholder='Name' required/>
                <input placeholder='E-Mail' required/>
                <textarea placeholder='Your messages' required/>
                <button>Send</button>
            </form>
        </div>
    )
}

export default Contact

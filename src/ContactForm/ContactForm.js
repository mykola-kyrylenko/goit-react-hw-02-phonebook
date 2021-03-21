// import { v4 as uuidv4 } from 'uuid';
// uuidv4()
import s from './ContactForm.module.css'

const ContactForm = ({ contacts }) => (
    <div className={s.ContactForm__container}>
        <p>Name</p>
        <input type="text" />
        <p>Number</p>
        <input type="text" />
        <button className={s.ContactList__add__button}>Add contact</button>
    </div>
    
       
)


export default ContactForm;
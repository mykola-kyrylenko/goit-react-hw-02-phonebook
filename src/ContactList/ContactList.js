import s from './ContactList.module.css'


const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={s.ContactList__list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.ContactList__list__item}>
                <p>{name}: {number}</p>
                <button className={s.ContactList__delete__button} onClick={()=>onDeleteContact(id)}>Delete</button>

            </li>
        ))}
        

        
    </ul>
);

export default ContactList;
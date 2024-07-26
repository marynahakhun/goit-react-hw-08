
import Contact from "../../components/Contact/Contact";
import css from "./contactList.module.css";


const ContactList = ({items}) => {
    if (!Array.isArray(items) || items.length === 0) {
    return <p>No contacts found</p>;
  }
  return (
    <ul className={css.contactList}>
      {items.map((person) => (
        <li className={css.item} key={person.id}>
          <Contact data={person} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

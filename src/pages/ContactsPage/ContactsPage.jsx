import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import {

  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContact } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {isLoading ? (
        <p>Loading...</p>
      ) : filteredContacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        <ContactList items={filteredContacts} />
      )}
    </div>
  );
};

export default ContactsPage;

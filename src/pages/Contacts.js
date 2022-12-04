import { ContactForm } from 'components/ContactForm/ContactForm';
import { FormBox } from 'components/ContactForm/ContactForm.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactsBox } from 'components/ContactList/ContactList.styled';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <main>
      <FormBox>
        <ContactForm />
      </FormBox>
      <ContactsBox>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </ContactsBox>
    </main>
  );
};
export default Contacts;

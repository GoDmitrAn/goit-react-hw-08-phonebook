import { ContactForm } from 'components/ContactForm/ContactForm';
import { FormBox } from 'components/ContactForm/ContactForm.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const Contacts = () => {
  return (
    <main>
      <FormBox>
        <ContactForm />
      </FormBox>
      <h2>Contacts</h2>
      <Filter />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <ContactList />
    </main>
  );
};
export default Contacts;

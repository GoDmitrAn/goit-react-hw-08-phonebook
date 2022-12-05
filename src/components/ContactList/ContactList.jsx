import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

import {
  ListBox,
  ContactListItem,
  Span,
  Phone,
  MyDeleteButton,
} from './ContactList.styled';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectFilteredContacts);

  return (
    <ListBox>
      {contactsList.map(({ id, name, number }) => {
        return (
          <ContactListItem key={id}>
            <Span>
              {name} : <Phone> {number}</Phone>
            </Span>
            <MyDeleteButton onClick={() => dispatch(deleteUser(id))}>
              <PersonRemoveIcon color="error" />
            </MyDeleteButton>
          </ContactListItem>
        );
      })}
    </ListBox>
  );
};

import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

import {
  ListBox,
  ContactListItem,
  DelBtn,
  Span,
  Phone,
  MyDeleteButton,
} from './ContactList.styled';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectFilteredContacts);

  return (
    <ListBox>
      {contactsList.map(({ id, name, phone }) => {
        return (
          <ContactListItem key={id}>
            <Span>
              {name} : <Phone> {phone}</Phone>
            </Span>
            {/* <DelBtn type="button" onClick={() => dispatch(deleteUser(id))}>
              Delete
            </DelBtn> */}

            {/* <IconButton
              type="button"
              onClick={() => dispatch(deleteUser(id))}
              fontSize="small"
              style={{ padding: '3px' }}
            >
              <PersonRemoveIcon color="error" />
            </IconButton> */}

            <MyDeleteButton onClick={() => dispatch(deleteUser(id))}>
              <PersonRemoveIcon color="error" />
            </MyDeleteButton>
          </ContactListItem>
        );
      })}
    </ListBox>
  );
};

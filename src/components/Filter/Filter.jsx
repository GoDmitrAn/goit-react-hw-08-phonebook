import { LabelName } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter, selectUsers } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  const items = useSelector(selectUsers);
  const handleInputChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };
  return items.length !== 0 ? (
    <label>
      <LabelName></LabelName>
      <input
        type="text"
        name="filter"
        onChange={handleInputChange}
        value={filterValue}
        placeholder="find contacts by name"
      />
    </label>
  ) : (
    <p>There is no contacts, create your own list</p>
  );
};

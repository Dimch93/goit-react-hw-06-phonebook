import css from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/sliceContact';

export const ContactsList = ({ listContact }) => {
  const dispatch = useDispatch();

  return listContact.map(cont => {
    const deleteContacts = id => {
      dispatch(remove(id));
    };
    return (
      <ul key={cont.id} className={css.contacts}>
        <span>
          {cont.name}: {cont.number}
        </span>
        <button
          className={css.btn}
          type="button"
          onClick={() => {
            deleteContacts(cont.id);
          }}
        >
          Delete
        </button>
      </ul>
    );
  });
};

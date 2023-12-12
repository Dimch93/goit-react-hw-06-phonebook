import css from './PhonebookForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../redux/sliceContact';
import { getContacts } from '../../redux/selectors';

export const PhonebookForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`${name} is alredy in contacts`);
    } else {
      dispatch(add({ name, number }));
    }
    reset();
  };

  return (
    <form className={css.form} type="submit" onSubmit={handleSubmit}>
      <div className={css.input}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.input}>
        <label>Number</label>
        <input
          name="number"
          type="tel"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

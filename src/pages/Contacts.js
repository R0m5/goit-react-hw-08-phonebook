import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operation';
import { selectError, selectIsLoading } from 'redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        margin: '20px auto',
        width: '480px',
        backgroundColor: 'rgb(187, 187, 187)',
        borderRadius: '10px',
        padding: ' 40px 20px',
      }}
    >
      <ContactForm />
      <Filter />
      <title>Contacts</title>
      {isLoading && !error && (
        <b
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '10px',
          }}
        >
          Loading...
        </b>
      )}
      <ContactList />
    </div>
  );
}

import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Toaster from './ui/Toaster';
import { ThreeDots } from 'react-loader-spinner';
import {
  ContactsForm,
  ContactsList,
  ContactsFilter,
  AppContainer,
  selectContacts,
  fetchAllContacts,
  selectIsLoading,
} from 'index';
///////////////////////////////////

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts(selectIsLoading));
  }, [dispatch]);

  return (
    <AppContainer>
      <h2>Phonebook</h2>
      <ContactsForm />

      <h2>Contacts</h2>

      {isLoading && (
        <ThreeDots
          height="150"
          width="300"
          radius="9"
          color="#000000"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      )}

      {contacts.length > 1 && isLoading === false && (
        <>
          <ContactsFilter />
        </>
      )}

      {contacts.length > 0 && isLoading === false && (
        <>
          <ContactsList />
        </>
      )}

      {contacts.length === 0 && isLoading === false && (
        <p>
          Phonebook is empty (: <br />
          Please add some contacts
        </p>
      )}

      <Toaster />
    </AppContainer>
  );
};

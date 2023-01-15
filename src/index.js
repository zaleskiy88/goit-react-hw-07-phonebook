import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { App } from 'components/App';
import './index.css';

export * from 'redux/filter/filterSlice';
export * from 'redux/contacts/contactsSlice';
export * from 'redux/selectors';
export * from 'redux/contacts/operations';
export * from 'components/ContactsForm/ContactsForm';
export * from 'components/ContactsList/ContactsList';
export * from 'components/ContactsFilterInput/ContactsFilterInput';
export * from 'components/App';
export * from 'components/ContactsForm/ContactsForm.styled';
export * from 'components/ContactsList/ContactsList.styled';
export * from 'components/ui/Button.styled';
export * from 'components/ui/AppContainer.styled';
export * from 'components/ui/Form.styled';
export * from 'components/ui/Input.styled';
export * from 'components/ui/Label.styled';
export * from 'components/ui/Toaster';
export * from 'components/ListItem/ListItem';
export * from 'components/ListItem/ListItem.styled';
export * from 'utils/capitalizeFirstLowercaseRest';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  //</React.StrictMode>
);

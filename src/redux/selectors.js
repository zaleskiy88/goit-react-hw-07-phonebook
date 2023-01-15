// Selectors:
// Imports in App.jsx
export const selectContacts = state => {
  return state.contacts.items;
};

export const selectFilterValue = state => {
  return state.filter;
};

export const selectError = state => {
  return state.contacts.error;
};

export const selectIsLoading = state => {
  return state.contacts.isLoading;
};

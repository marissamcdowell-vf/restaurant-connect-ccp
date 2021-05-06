// Stores the cognito user object
export const updateAuthUser = (store, AuthUser) => {
  store.setState({ AuthUser });
};

// Stores the session auth
export const updateAuthState = (store, AuthState) => {
  store.setState({ AuthState });
};

// Set the checkout status
export const updateCheckoutStatus = (store, CheckoutState) => {
  store.setState({ CheckoutState });
};

// Controls visability of the chat UI
export const updateChatVisibility = (store, ChatUIVisible) => {
  store.setState({ ChatUIVisible });
};

// Controls visability of the chat UI
export const updateBook = (store, Book) => {
  store.setState({ Book });
};

// Controls visability of the chat UI
export const updateBookId = (store, BookId) => {
  store.setState({ BookId });
};

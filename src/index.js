const store = require("./store");

console.log(store.getState());

store.dispatch({
  type: "SET_MESSAGE",
  payload: "nova mensagem",
});

console.log(store.getState());

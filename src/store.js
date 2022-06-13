const { legacy_createStore: createStore } = require("redux");

// Define o estado inicial do store e
// Produz um novo estado sempre que uma ação é disparada
function helloWorldReducer(state = "hello world", action) {
  switch (action.type) {
    case "SET_MESSAGE":
      return action.payload;
    default:
      return state;
  }
}

const store = createStore(helloWorldReducer);

module.exports = store;

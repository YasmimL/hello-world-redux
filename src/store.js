const { legacy_createStore: createStore } = require("redux");

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

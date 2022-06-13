const store = require("./store");

console.log("Mensagem inicial:", store.getState());

// Usado para ler dados do terminal
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Solicitar ao usuário uma nova mensagem
readline.question(`Digite uma nova mensagem: `, (message) => {
  // Após digitar a mensagem uma action é disparada, atualizando o state
  store.dispatch({
    type: "SET_MESSAGE",
    payload: message,
  });

  console.log("Nova mensagem:", store.getState());

  readline.close();
});

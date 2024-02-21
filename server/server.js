import WebSocket from 'ws';
import inquirer from 'inquirer';

const ws = new WebSocket('ws://localhost:8000');
const obj = {name: "John", age: 30, city: "New York"};
ws.on('open', () => {
// function askForMessage() {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'message',
//             message: 'Enter message to be sent:'
//         }
//     ]).then(answers => {
//         ws.send(answers.message);
//         askForMessage();
//     });
// }
// askForMessage();
ws.send(JSON.stringify(obj));
});
import WebSocket from 'ws';
import inquirer from 'inquirer';

const ws : WebSocket = new WebSocket('ws://localhost:8000');
ws.on('open', () => {
function askForMessage() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'message',
            message: 'Enter message to be sent:'
        }
    ]).then(answers => {
        ws.send(answers.message);
        askForMessage();
    });
}
askForMessage();
});


ws.on('message', function message(data) {
  console.log('received: %s', data);
});
import WebSocket from 'ws';
import inquirer from 'inquirer';

const ws = new WebSocket('ws://localhost:8000');
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
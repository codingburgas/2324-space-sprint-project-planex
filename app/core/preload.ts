import { contextBridge, ipcRenderer } from 'electron';
  

contextBridge.exposeInMainWorld('electron', {
  send: (channel: string, data: any) => {
    ipcRenderer.send(channel, data);
  },
});

// createTcpConnection: (host: string, port: number, onConnected: Function, onDataReceived: Function, onError: Function) => {
//     tcpSocket.connect(host, port, () => {
//       onConnected();
//       tcpSocket.receiveData((data: Buffer) => {
//         onDataReceived(data.toString());
//       });
//       tcpSocket.client.on('error', (error: Error) => {
//         onError(error.message);
//       });
//     });
//   },
//   sendData: (data: string) => {
//     tcpSocket.sendData(data);
//   },
//   closeTcpConnection: () => {
//     tcpSocket.closeConnection();
//   }
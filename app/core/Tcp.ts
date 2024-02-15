import * as net from 'net';

class TcpSocketClass {
    public client: net.Socket;

    constructor() {
        this.client = new net.Socket();
    }

    connect(host: string, port: number, onConnect: () => void): void {
        this.client.connect(port, host, onConnect);
    }

    sendData(data: string): void {
        this.client.write(data);
    }

    receiveData(onData: (data: Buffer) => void): void {
        this.client.on('data', onData);
    }

    closeConnection(): void {
        this.client.end();
    }
}

export default TcpSocketClass;

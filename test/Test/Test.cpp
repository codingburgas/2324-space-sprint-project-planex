#include <SFML/Network.hpp>
#include <iostream>

using std::cerr;
using std::cout;

int main() {
    cout << "test\n\n";
    // Create a UDP socket
    sf::UdpSocket socket;

    // Bind the socket to a port
    unsigned short port = 12345;
    if (socket.bind(port) != sf::Socket::Done) {
        cerr << "Failed to bind the socket to port " << port << std::endl;
        return 1;
    }

    cout << "Server is listening on port " << port << std::endl;

    // Receive data from clients
    char buffer[1024];
    std::size_t received;
    std::string message;
    sf::IpAddress sender;
    unsigned short senderPort = 12346;

    while (true) {
        // Receive data from clients
        for (size_t i = 0; i < 5; i++)
        {
            socket.receive(buffer, sizeof(buffer), received, sender, senderPort);
            buffer[received] = '\0'; // Null-terminate the received data4
            cout << "Received: " << buffer << std::endl;
            
        }
        // Send data to the client
        for (size_t i = 0; i < 5; i++)
        {
            cout << "Enter message to send to client: ";
            std::getline(std::cin, message);

            socket.send(message.c_str(), message.size() + 1, sender, senderPort);

        }
    }

    return 0;
}

#include <SFML/Network.hpp>
#include <iostream>

int main() {
    // Create a UDP socket
    sf::UdpSocket socket;

    // Bind the socket to a port
    unsigned short port = 12345;
    if (socket.bind(port) != sf::Socket::Done) {
        std::cerr << "Failed to bind the socket to port " << port << std::endl;
        return 1;
    }

    std::cout << "Server is listening on port " << port << std::endl;

    // Receive data from clients
    char buffer[1024];
    std::size_t received;
    sf::IpAddress sender;
    unsigned short senderPort;

    while (true) {
        if (socket.receive(buffer, sizeof(buffer), received, sender, senderPort) != sf::Socket::Done) {
            std::cerr << "Failed to receive data from client" << std::endl;
        }
        else {
            buffer[received] = '\0'; // Null-terminate the received data
            std::cout << "Received: " << buffer << " from " << sender << ":" << senderPort << std::endl;
        }
    }

    return 0;
}

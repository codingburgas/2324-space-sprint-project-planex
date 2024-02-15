#include <iostream>
#include <winsock2.h>

#pragma comment(lib, "ws2_32.lib") // Link with ws2_32.lib

int main() {
    // Step 1: Initialize Winsock
    WSADATA wsaData;
    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
        std::cerr << "WSAStartup failed\n";
        return 1;
    }

    // Step 2: Create a UDP socket
    SOCKET udpSocket = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);
    if (udpSocket == INVALID_SOCKET) {
        std::cerr << "socket failed with error: " << WSAGetLastError() << "\n";
        WSACleanup();
        return 1;
    }

    // Step 3: Specify the address and port to bind
    sockaddr_in serverAddr;
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_addr.s_addr = htonl(INADDR_ANY); // Listen on any interface
    serverAddr.sin_port = htons(12345); // Use port 12345

    // Step 4: Bind the socket
    if (bind(udpSocket, reinterpret_cast<sockaddr*>(&serverAddr), sizeof(serverAddr)) == SOCKET_ERROR) {
        std::cerr << "bind failed with error: " << WSAGetLastError() << "\n";
        closesocket(udpSocket);
        WSACleanup();
        return 1;
    }

    // Step 5: Receive data
    char buffer[1024];
    sockaddr_in clientAddr;
    int clientAddrLen = sizeof(clientAddr);
    int bytesReceived = recvfrom(udpSocket, buffer, sizeof(buffer), 0, reinterpret_cast<sockaddr*>(&clientAddr), &clientAddrLen);
    if (bytesReceived == SOCKET_ERROR) {
        std::cerr << "recvfrom failed with error: " << WSAGetLastError() << "\n";
    }
    else {
        buffer[bytesReceived] = '\0'; // Null-terminate the received data
        std::cout << "Received: " << buffer << "\n";
    }

    // Step 6: Clean up
    closesocket(udpSocket);
    WSACleanup();
    return 0;
}

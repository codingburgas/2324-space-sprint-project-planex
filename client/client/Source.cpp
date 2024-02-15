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

    // Step 3: Specify the server address and port
    sockaddr_in serverAddr;
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_addr.s_addr = inet_addr("127.0.0.1"); // Server IP address
    serverAddr.sin_port = htons(12345); // Server port

    // Step 4: Send data to the server
    const char* message = "Hello, server!";
    int messageLength = strlen(message);
    int bytesSent = sendto(udpSocket, message, messageLength, 0, reinterpret_cast<sockaddr*>(&serverAddr), sizeof(serverAddr));
    if (bytesSent == SOCKET_ERROR) {
        std::cerr << "sendto failed with error: " << WSAGetLastError() << "\n";
    }
    else {
        std::cout << "Message sent successfully\n";
    }

    // Step 5: Clean up
    closesocket(udpSocket);
    WSACleanup();
    return 0;
}

#include "utils.hpp"

auto Utils::Network::recieve(Network* instance) const {
	while (true) {
		try {
			if (instance->socket.recieve(instance->buffer, sizeof(instance->buffer), instance->recieved, instance->senderIP, instance->senderPort) != sf::Socket::Done) {
				throw 505;
			}
			else {
				buffer[recieved] = '\0';
				std::cout << "Recieved: " << buffer << " from " << senderIP << std::endl;
			}
		}
		catch (int error) {
			std::cout << "Faiiled. Eror code " << error << std::endl;
		}
	}
}
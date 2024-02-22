#include <websocketpp/config/asio_no_tls.hpp>
#include <websocketpp/server.hpp>
#include <iostream>


using websocketpp::lib::placeholders::_1;
using websocketpp::lib::placeholders::_2;
using websocketpp::lib::bind;

#define SERVER_PORT 8000

class Network {

public:

	websocketpp::server<websocketpp::config::asio> server;
    uint16_t serverPort = SERVER_PORT;

    void on_message(websocketpp::server<websocketpp::config::asio>* s, websocketpp::connection_hdl hdl, websocketpp::server<websocketpp::config::asio>::message_ptr msg) {
        std::cout << msg->get_payload()
            << std::endl;

        if (msg->get_payload() == "stop-listening") {
            s->stop_listening();
            return;
        }

        try {
            s->send(hdl, this->data, msg->get_opcode());
        }
        catch (websocketpp::exception const& e) {
            std::cout << "Echo failed because: "
                << "(" << e.what() << ")" << std::endl;
        }
    }

    void setData(std::string& input) {
        this->data = input;
    }

    void runServer() {
        this->server.run();
    }

    void setServerPort(uint16_t& port) {
        this->serverPort = port;
    }

    void initServer() {
        this->server.listen(this->serverPort);
        this->server.start_accept();
    }

    void stopServer() {
        this->server.stop_listening();
    }

    private:
        std::string data;

};
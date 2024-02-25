#define ASIO_STANDALONE
#define _WEBSOCKETPP_CPP11_TYPE_TRAITS_


#include <websocketpp/config/asio_no_tls.hpp>
#include <websocketpp/server.hpp>
#include <iostream>



using websocketpp::lib::placeholders::_1;
using websocketpp::lib::placeholders::_2;
using websocketpp::lib::bind;

#define SERVER_PORT 8000

websocketpp::connection_hdl hdlReference;

void on_message(websocketpp::server<websocketpp::config::asio>* s, websocketpp::connection_hdl hdl, websocketpp::server<websocketpp::config::asio>::message_ptr msg) {
    std::cout << msg->get_payload()
        << std::endl;
    hdlReference = hdl;

    if (msg->get_payload() == "stop-listening") {
        s->stop_listening();
        return;
    }
}

int main() {

    websocketpp::server<websocketpp::config::asio> echo_server;

        echo_server.set_access_channels(websocketpp::log::alevel::all ^ websocketpp::log::alevel::frame_header);
        echo_server.clear_access_channels(websocketpp::log::alevel::frame_header);


        echo_server.init_asio();


        echo_server.set_message_handler(bind(&on_message, &echo_server, ::_1, ::_2));


        echo_server.listen(SERVER_PORT);

        echo_server.start_accept();

        echo_server.run();
   

       

}
#define ASIO_STANDALONE
#define _WEBSOCKETPP_CPP11_TYPE_TRAITS_


#include <websocketpp/config/asio_no_tls.hpp>
#include <websocketpp/server.hpp>
#include <iostream>
#include <nlohmann/json.hpp>
#include "vector.hpp"
#include "particle.hpp"


using websocketpp::lib::placeholders::_1;
using websocketpp::lib::placeholders::_2;
using websocketpp::lib::bind;

using json = nlohmann::json;

#define SERVER_PORT 8000

websocketpp::connection_hdl hdlReference;

json mercuryData;
json venusData;
json earthData;
json marsData;
json neptuneData;
json plutoData;
json saturnData;
json jupiterData;
json uranusData;

void on_message(websocketpp::server<websocketpp::config::asio>* s, websocketpp::connection_hdl hdl, websocketpp::server<websocketpp::config::asio>::message_ptr msg) {
    
    try {
        json parsedMessage = json::parse(msg->get_payload());
        std::cout << msg->get_payload() << std::endl;
        json response;

        if (!parsedMessage.is_object()) {
            std::cerr << "Expected a JSON object" << std::endl;
            return;
        }

        std::string planetType = parsedMessage["type"];
        json coords = parsedMessage["coords"];
        double theta = parsedMessage["theta"];

        if (planetType == "mercury") {
            Particle::Particle mercury;
            Vector::Vec3 currentPos(coords["x"], coords["y"], coords["z"]);

            double orbitRadius = 120;
            double sunMass = 500; 
            double gravityConst = 40;
            double deltaT = 0.1;

            mercury.celestialVelocity(gravityConst, sunMass, orbitRadius, theta);
            auto velocity = mercury.velocity;
            
            currentPos.updatePosition(velocity, deltaT);
            json positionJson = {
            {"x", currentPos.x},
            {"y", currentPos.y},
            {"z", currentPos.z}
            };
            mercuryData["coords"] = positionJson;
            mercuryData["type"] = "mercury";

            response = mercuryData;
        }
        else if (planetType == "venus") {
            venusData = parsedMessage;
            response = venusData;
        }
        else if (planetType == "earth") {
            earthData = parsedMessage;
            response = earthData;
        }
        else if (planetType == "mars") {
            marsData = parsedMessage;
            response = marsData;
        }
        else if (planetType == "neptune") {
            neptuneData = parsedMessage;
            response = neptuneData;
        }
        else if (planetType == "pluto") {
            plutoData = parsedMessage;
            response = plutoData;
        }
        else if (planetType == "saturn") {
            saturnData = parsedMessage;
            response = saturnData;
        }
        else if (planetType == "jupiter") {
            jupiterData = parsedMessage;
            response = jupiterData;
        }
        else if (planetType == "uranus") {
            uranusData = parsedMessage;
            response = uranusData;
        }
        else {
            std::cerr << "Unknown planet type" << std::endl;
            response = { {"status", "error"}, {"message", "Unknown planet type received"} };
        }

        s->send(hdl, response.dump(), msg->get_opcode());

    }
    catch (json::parse_error& e) {
        std::cerr << "JSON Parse Error: " << e.what() << std::endl;
    }
    catch (std::exception& e) {
        std::cerr << "Standard Exception: " << e.what() << std::endl;
    }
}

int main() {

    websocketpp::server<websocketpp::config::asio> server;

    server.set_access_channels(websocketpp::log::alevel::all ^ websocketpp::log::alevel::frame_header);
    server.clear_access_channels(websocketpp::log::alevel::frame_header);


    server.init_asio();


    server.set_message_handler(bind(&on_message, &server, ::_1, ::_2));


    server.listen(SERVER_PORT);

    server.start_accept();

    server.run();


}
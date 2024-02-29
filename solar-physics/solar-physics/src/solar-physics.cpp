#define ASIO_STANDALONE
#define _WEBSOCKETPP_CPP11_TYPE_TRAITS_


#include <websocketpp/config/asio_no_tls.hpp>
#include <websocketpp/server.hpp>
#include <iostream>
#include <nlohmann/json.hpp>
#include "vector.hpp"
#include "particle.hpp"
#include <chrono>


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

auto startTime = std::chrono::high_resolution_clock::now();

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

        if (planetType == "mercury") {

            auto currentTime = std::chrono::high_resolution_clock::now();
            real t = std::chrono::duration<real, std::chrono::seconds::period>(currentTime - startTime).count();

            Particle::Particle mercury;
            Vector::Vec3 currentPos;

            real orbitRadius = 60;
            real speed = 1; 

            currentPos.x = orbitRadius * std::cos(t * speed);
            currentPos.y = 0;
            currentPos.z = orbitRadius * std::sin(-t * speed);

            json positionJson = {
                {"x", currentPos.x},
                {"y", currentPos.y}, 
                {"z", currentPos.z }
            };

            mercuryData["coords"] = positionJson;
            mercuryData["type"] = "mercury";

            response = mercuryData;
        }
        else if (planetType == "venus") {

            real theta = parsedMessage["theta"];
            Particle::Particle venus;
            Vector::Vec3 currentPos(coords["x"], coords["y"], coords["z"]);

            real orbitRadius = 120;
            real sunMass = 500;
            real gravityConst = 40;
            real deltaT = 1;

            venus.celestialVelocity(venus, gravityConst, sunMass, orbitRadius, theta);
            auto velocity = venus.velocity;

            currentPos.updatePosition(velocity, deltaT, theta);
            json positionJson = {
            {"x", currentPos.x},
            {"y", 0},
            {"z", currentPos.z}
            };
            venusData["coords"] = positionJson;
            venusData["type"] = "venus";

            response = venusData;
        }
        else if (planetType == "earth") {
            real theta = parsedMessage["theta"];
            Particle::Particle earth;
            Vector::Vec3 currentPos(coords["x"], coords["y"], coords["z"]);

            real orbitRadius = 160;
            real sunMass = 500;
            real gravityConst = 40;
            real deltaT = 0.1;

            earth.celestialVelocity(earth, gravityConst, sunMass, orbitRadius, theta);
            auto velocity = earth.velocity;

            currentPos.updatePosition(velocity, deltaT, theta);
            json positionJson = {
            {"x", currentPos.x},
            {"y", 0},
            {"z", currentPos.z}
            };
            earthData["coords"] = positionJson;
            earthData["type"] = "earth";

            response = earthData;
            
        }

        else if (planetType == "mars") {

            real theta = parsedMessage["theta"];

            Particle::Particle mars;
            Vector::Vec3 currentPos(coords["x"], coords["y"], coords["z"]);

            real orbitRadius = 205; 

            theta += (2 * MATH_PI * (1.0 / 100) * 0.1); 

            currentPos.x = orbitRadius * std::cos(theta);
            currentPos.y = 0; 
            currentPos.z = orbitRadius * std::sin(theta);

            json positionJson = {
                {"x", currentPos.x},
                {"y", currentPos.y},
                {"z", currentPos.z}
            };

            marsData["coords"] = positionJson;
            marsData["type"] = "mars";

            response = marsData;

        }

        else if (planetType == "neptune") {

            real theta = parsedMessage["theta"];

            Particle::Particle neptune;
            Vector::Vec3 currentPos(coords["x"], coords["y"], coords["z"]);

            real orbitRadius = 520;
            real sunMass = 500;
            real gravityConst = 40;
            real deltaT = 0.1;

            neptune.celestialVelocity(neptune, gravityConst, sunMass, orbitRadius, theta);
            auto velocity = neptune.velocity;
            currentPos.updatePosition(velocity, deltaT, theta);
            json positionJson = {
            {"x", currentPos.x},
            {"y", 0},
            {"z", currentPos.z}
            };
            neptuneData["coords"] = positionJson;
            neptuneData["type"] = "neptune";

            response = neptuneData;

        }
        else if (planetType == "pluto") {

            real theta = parsedMessage["theta"];

            Particle::Particle pluto;
            Vector::Vec3 currentPos(coords["x"], coords["y"], coords["z"]);

            real orbitRadius = 570;
            real sunMass = 500;
            real gravityConst = 40;
            real deltaT = 0.1;

            pluto.celestialVelocity(pluto, gravityConst, sunMass, orbitRadius, theta);
            auto velocity = pluto.velocity;

            currentPos.updatePosition(velocity, deltaT, theta);
            json positionJson = {
            {"x", currentPos.x},
            {"y", 0},
            {"z", currentPos.z}
            };
            plutoData["coords"] = positionJson;
            plutoData["type"] = "pluto";

            response = plutoData;

        }

        else if (planetType == "saturn") {

            real theta = parsedMessage["theta"];

            Particle::Particle saturn;
            Vector::Vec3 currentPos(coords["x"], coords["y"], coords["z"]);

            real orbitRadius = 360;
            real sunMass = 500;
            real gravityConst = 40;
            real deltaT = 0.1;

            saturn.celestialVelocity(saturn, gravityConst, sunMass, orbitRadius, theta);
            auto velocity = saturn.velocity;

            currentPos.updatePosition(velocity, deltaT, theta);
            json positionJson = {
            {"x", currentPos.x},
            {"y", 0},
            {"z", currentPos.z}
            };
            saturnData["coords"] = positionJson;
            saturnData["type"] = "saturn";

            response = saturnData;
        }
        else if (planetType == "jupiter") {

            real theta = parsedMessage["theta"];

            Particle::Particle jupiter;
            Vector::Vec3 currentPos(coords["x"], coords["y"], coords["z"]);

            real orbitRadius = 205;
            real sunMass = 500;
            real gravityConst = 40;
            real deltaT = 0.1;

            jupiter.celestialVelocity(jupiter, gravityConst, sunMass, orbitRadius, theta);
            auto velocity = jupiter.velocity;

            currentPos.updatePosition(velocity, deltaT, theta);
            json positionJson = {
            {"x", currentPos.x},
            {"y", 0},
            {"z", currentPos.z}
            };
            jupiterData["coords"] = positionJson;
            jupiterData["type"] = "jupiter";
            response = jupiterData;
        }
        else if (planetType == "uranus") {

            real theta = parsedMessage["theta"];

            Particle::Particle uranus;
            Vector::Vec3 currentPos(coords["x"], coords["y"], coords["z"]);

            real orbitRadius = 450;
            real sunMass = 500;
            real gravityConst = 40;
            real deltaT = 0.1;

            uranus.celestialVelocity(uranus, gravityConst, sunMass, orbitRadius, theta);
            auto velocity = uranus.velocity;

            currentPos.updatePosition(velocity, deltaT, theta);
            json positionJson = {
            {"x", currentPos.x},
            {"y", 0},
            {"z", currentPos.z}
            };
            uranusData["coords"] = positionJson;
            uranusData["type"] = "uranus";
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
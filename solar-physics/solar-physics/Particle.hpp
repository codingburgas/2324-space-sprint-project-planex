#pragma once
#define real double

#include <cmath>
#include <iostream>
#include <vector>
#include "vector.hpp"
using std::cin, std::cout, std::endl;

namespace Particle {
    class Particle {
    public:
        Vector::Vec3 position, velocity, acceleration;

    };
}
#include <iostream>
#include "vector.hpp"
#include "quanterion.hpp"
#include "utils.hpp"


using Vector::Vec3;
using Quanterion::Vec4;
using std::cin, std::cout, std::endl;

int main() {
    Vec4 point = { 0.0, 1.0, 0.0, 0.0 };
    Vec4 axis = { 0.0, 1.0, 0.0, 0.0 };
    real angle = MATH_PI / 2.0;

    Vec4 rotatedPoint = Vec4().rotatePoint(&point, &axis, angle);

    std::cout << "("<< point.x << ", " << point.y << ", " << point.z << ")" << std::endl;
    std::cout << "(" << rotatedPoint.x << ", " << rotatedPoint.y << ", " << rotatedPoint.z << ")" << std::endl;
}
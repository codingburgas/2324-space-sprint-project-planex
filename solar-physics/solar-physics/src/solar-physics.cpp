#include <iostream>
#include <ostream>
#include "vector.hpp"
#include "quanterion.hpp"

using Vector::Vec3;
using Quanterion::Vec4;
using std::cin, std::cout, std::endl;

int main() {
    Vec4 point = { 0.0, 1.0, 0.0, 0.0 };
    Vec4 axis = { 0.0, 1.0, 0.0, 0.0 };

    real pi = 3.14;
    real angle = pi / 2.0;

    Vec4 rotatedPoint = point.rotatePoint(point, axis, angle);

    std::cout << "Original Point: (" << point.x << ", " << point.y << ", " << point.z << ")" << std::endl;
    std::cout << "Rotated Point: (" << rotatedPoint.x << ", " << rotatedPoint.y << ", " << rotatedPoint.z << ")" << std::endl;

}
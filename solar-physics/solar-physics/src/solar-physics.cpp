#include <iostream>
#include <ostream>
#include "vector.hpp"
using Vector::Vec3;
using std::cin, std::cout, std::endl;

int main() {
	Vec3 position1(1, 2, 3), position2(4, 5, 6), v(1, 3, 4);
	real timePassed = 3;
	auto velocity = position1.getVelocity(&position1, &position2, timePassed);
	std::cout << velocity;

}
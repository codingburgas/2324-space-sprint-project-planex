#include <iostream>
#include <ostream>
#include "vector.h"
using Vector::Vec3;
using std::cin, std::cout, std::endl;

int main() {

	Vec3* vector = new Vec3(1, 2, 3);
	Vec3* vector1 = new Vec3(3, 4, 5);
	real timePassed = 3.00;
	real degree = 45;
	real v = vector->getTrigonometryCross(vector, vector1, degree);
	std::cout << v;

}
#include <iostream>
#include <ostream>
#include "vector.hpp"
#include "quanterion.hpp"

using Vector::Vec3;
using Quanterion::Vec4;
using std::cin, std::cout, std::endl;

int main() {
    Vec4 q1(1, 2, 3, 4);
    Vec4 q2(3, 4, 5, 4);
    Vec4 result = q1 * q2;
    Vec4 result2 = q2 * q1;

    cout << result << " " << result2;
}
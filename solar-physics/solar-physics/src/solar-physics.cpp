#include <iostream>
#include "vector.hpp"
#include "quanterion.hpp"
#include "utils.hpp"


using Vector::Vec3;
using Quanterion::Vec4;
using std::cin, std::cout, std::endl;

int main() {

    Utils::Memory obj(1024);
    const buffer_var size = 24;
    std::cout << obj.createHeapObject(obj, &size);
    
}
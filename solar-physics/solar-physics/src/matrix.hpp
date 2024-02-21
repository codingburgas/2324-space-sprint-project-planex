#pragma once
#define real double

#include <cmath>
#include <iostream>
#include <vector>
#include "vector.hpp"

using std::cin, std::cout, std::endl;

namespace Matrix {

    class Matrix3x4 {
    public:
        real data[12];

        Matrix3x4() {
            for (int i = 0; i < 12; ++i)
                data[i] = 0;
        }

        void orientationAndPosition(const Quanterion::Vec4& q, const Vector::Vec3& pos);

    private:
        real calculateM00(const Quanterion::Vec4& q) const;
        real calculateM01(const Quanterion::Vec4& q) const;
        real calculateM02(const Quanterion::Vec4& q) const;
    };

}
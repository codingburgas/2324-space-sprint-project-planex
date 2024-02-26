#pragma once

#include <cmath>
#include <iostream>
#include <vector>
#include "Quaternion.hpp"
#include "Vector.hpp"

namespace Matrix {

    class Matrix3x4 {
    public:
        double data[12];

        Matrix3x4() {
            for (int i = 0; i < 12; ++i)
                data[i] = 0;
        }

        void orientationAndPosition(const Quaternion::Vec4& q, const Vector::Vec3& pos);

        Vector::Vec3 transform(const Vector::Vec3& vector) const;

        Vector::Vec3 transformInverse(const Vector::Vec3& vector) const;

        Vector::Vec3 transformDirection(const Vector::Vec3& vector) const;

        Vector::Vec3 transformInverseDirection(const Vector::Vec3& vector) const;

        void setInverse(const Matrix3x4& m);

    private:
        double calculateM00(const Quaternion::Vec4& q) const;
        double calculateM01(const Quaternion::Vec4& q) const;
        double calculateM02(const Quaternion::Vec4& q) const;
    };

}

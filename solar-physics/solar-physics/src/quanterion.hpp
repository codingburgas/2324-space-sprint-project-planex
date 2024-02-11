#pragma once
#define real double

#include <cmath>
#include <iostream>
#include <vector>

using std::cin, std::cout, std::endl;

namespace Quanterion {
    class Vec4 {

    public:
        real x, y, z, w;

        // Constructors
        Vec4(real r, real i, real j, real k) : w(r), x(i), y(j), z(k) {}
        Vec4() : w(0.0), x(0.0), y(0.0), z(0.0) {}

        Vec4 operator*(const Vec4& quaternion) const {
            real qw = this->w * quaternion.w - this->x * quaternion.x - this->y * quaternion.y - this->z * quaternion.z;
            real qx = this->w * quaternion.x + this->x * quaternion.w + this->y * quaternion.z - this->z * quaternion.y;
            real qy = this->w * quaternion.y - this->x * quaternion.z + this->y * quaternion.w + this->z * quaternion.x;
            real qz = this->w * quaternion.z + this->x * quaternion.y - this->y * quaternion.x + this->z * quaternion.w;
            return Vec4(qw, qx, qy, qz);
        }

        Vec4& operator+=(const Vec4& quaternion) {
            w += quaternion.w;
            x += quaternion.x;
            y += quaternion.y;
            z += quaternion.z;
        }

        Vec4& operator-=(const Vec4& quaternion) {
            w -= quaternion.w;
            x -= quaternion.x;
            y -= quaternion.y;
            z -= quaternion.z;
        }

        Vec4 operator*(const real& value) const {
            return Vec4(w * value, x * value, y * value, z * value);
        }

        Vec4 operator+(const Vec4& quaternion) const {
            return Vec4(w + quaternion.w, x + quaternion.x, y + quaternion.y, z + quaternion.z);
        }

        Vec4 operator-(const Vec4& quaternion) const {
            return Vec4(w - quaternion.w, x - quaternion.x, y - quaternion.y, z - quaternion.z);
        }

        Vec4 operator/(const real& scalar) const {
            return Vec4(w / scalar, x / scalar, y / scalar, z / scalar);
        }

        real getQuaternionMagnitude(Vec4& q) const;

        bool isUnitQuaternion(Vec4& q) const;

        Vec4 getNormalizeQuaternion(Vec4& q) const;
    };
}
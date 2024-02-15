#pragma once
#define real double

#include <cmath>
#include <iostream>
#include <vector>
#include "vector.hpp"

using std::cin, std::cout, std::endl;


namespace Quanterion {
    class Vec4 {

    public:
        real x, y, z, w;

        // Constructors
        Vec4(real r, real i, real j, real k) : x(r), y(i), z(j), w(k) {};
        Vec4() : x(0.0), y(0.0), z(0.0), w(0.0) {};


        friend std::ostream& operator<<(std::ostream& os, const Vec4& vec) {
            return os << "(" << vec.x << ", " << vec.y << ", " << vec.z << vec.w << ", " << ")";
        }

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
        //@brief gets the Magnitude of a quaternion
        real getQuaternionMagnitude(Vec4* q) const;

        //@brief is the quaternion a unit
        bool isUnitQuaternion(Vec4* q) const;

        //@brief get the quaternion normalize
        Vec4 getNormalizeQuaternion(Vec4* q) const;

        Vec4 rotateByQuaternion(const Quanterion::Vec4* quaternion) const;

        Vec4 rotateByQuaternion(const Vec4* angularVelocity, const real& deltaTime) const;

        Vec4 getInverseQuaternion(const Vec4* q) const;

        Vec4 rotatePoint(const Vec4* point, const Vec4* axis, const real& angle) const;
        Vec4 quanterionFromAxisAngle(const Vector::Vec3* axis, const real& angle) const;
        Vector::Vec3 rotatePoint(const Vector::Vec3* point, const Vector::Vec3* axis, const real& angle);

    };
}
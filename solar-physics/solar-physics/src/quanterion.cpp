#include <cmath>
#include <iostream>
#include "quanterion.hpp"

real Quanterion::Vec4::getQuaternionMagnitude(Vec4& q) const {
    return sqrt(q.w * q.w + q.x * q.x + q.y * q.y + q.z * q.z);
}

bool Quanterion::Vec4::isUnitQuaternion(Vec4& q) const {
    return fabs(getQuaternionMagnitude(q) - 1.0) < 1e-10;
}

Quanterion::Vec4 Quanterion::Vec4::getNormalizeQuaternion(Vec4& q) const {
    real magnitude = getQuaternionMagnitude(q);
    return Vec4(q.w / magnitude, q.x / magnitude, q.y / magnitude, q.z / magnitude);
}
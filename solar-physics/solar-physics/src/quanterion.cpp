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
Quanterion::Vec4 Quanterion::Vec4::createRotationQuaternion(const Quanterion::Vec4& axis, real angle) {
    real halfAngle = angle / 2.0;
    real cosHalfAngle = std::cos(halfAngle);
    real sinHalfAngle = std::sin(halfAngle);

    Quanterion::Vec4 rotationQuaternion;
    rotationQuaternion.w = cosHalfAngle;
    rotationQuaternion.x = sinHalfAngle * axis.x;
    rotationQuaternion.y = sinHalfAngle * axis.y;
    rotationQuaternion.z = sinHalfAngle * axis.z;

    return rotationQuaternion;
}
Quanterion::Vec4 Quanterion::Vec4::rotatePoint(const Quanterion::Vec4& point, const Quanterion::Vec4& axis, double angle) const {
    double halfAngle = angle / 2.0;
    double cosHalfAngle = cos(halfAngle);
    double sinHalfAngle = sin(halfAngle);

    Quanterion::Vec4 rotationQuaternion;
    rotationQuaternion.w = cosHalfAngle;
    rotationQuaternion.x = sinHalfAngle * axis.x;
    rotationQuaternion.y = sinHalfAngle * axis.y;
    rotationQuaternion.z = sinHalfAngle * axis.z;

    Quanterion::Vec4 inverseRotationQuaternion = getInverseQuaternion(rotationQuaternion);

Quanterion::Vec4 result = rotationQuaternion * point * inverseRotationQuaternion;

    return result;
}

Quanterion::Vec4 Quanterion::Vec4::getInverseQuaternion(const Quanterion::Vec4& q) const {
    return Quanterion::Vec4(q.w, -q.x, -q.y, -q.z);
}
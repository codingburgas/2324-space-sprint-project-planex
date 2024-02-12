#include "quanterion.hpp"
#include "vector.hpp"

real Quanterion::Vec4::getQuaternionMagnitude(Vec4* q) const {
    return sqrt(q->w * q->w + q->x * q->x + q->y * q->y + q->z * q->z);
}

bool Quanterion::Vec4::isUnitQuaternion(Vec4* q) const {
    return fabs(getQuaternionMagnitude(q) - 1.0) < 1e-10;
}

Quanterion::Vec4 Quanterion::Vec4::getNormalizeQuaternion(Vec4* q) const {
    real magnitude = getQuaternionMagnitude(q);
    return Vec4(q->w / magnitude, q->x / magnitude, q->y / magnitude, q->z / magnitude);
}

Quanterion::Vec4 Quanterion::Vec4::rotateByQuaternion(const Quanterion::Vec4* quaternion) const {
    return Quanterion::Vec4(
        (w * quaternion->x + x * quaternion->w + y * quaternion->z - z * quaternion->y), 
        (w * quaternion->y - x * quaternion->z + y * quaternion->w + z * quaternion->x), 
        (w * quaternion->z + x * quaternion->y - y * quaternion->x + z * quaternion->w), 
        (w * quaternion->w - x * quaternion->x - y * quaternion->y - z * quaternion->z)
    );
}

Quanterion::Vec4 Quanterion::Vec4::rotateByQuaternion(const Quanterion::Vec4* angularVelocity, const real& deltaTime) const {

    real magnitude = sqrt(angularVelocity->x * angularVelocity->x +
        angularVelocity->y * angularVelocity->y +
        angularVelocity->z * angularVelocity->z);

    real halfAngle = magnitude * deltaTime / 2.0;
    real cosHalfAngle = cos(halfAngle);
    real sinHalfAngle = sin(halfAngle);

    return Quanterion::Vec4(
        cosHalfAngle,
        sinHalfAngle * angularVelocity->x / magnitude,
        sinHalfAngle * angularVelocity->y / magnitude,
        sinHalfAngle * angularVelocity->z / magnitude
    );
}

Quanterion::Vec4 Quanterion::Vec4::getInverseQuaternion(const Quanterion::Vec4* q) const {
    return Quanterion::Vec4(q->w, -q->x, -q->y, -q->z);
}

Quanterion::Vec4 Quanterion::Vec4::quanterionFromAxisAngle(const Vector::Vec3* axis, const real& angle) const {

    return Quanterion::Vec4(
        cos(angle / 2.0),
        sin(angle / 2.0) * axis->x,
        sin(angle / 2.0) * axis->y,
        sin(angle / 2.0) * axis->z
    );
}

Vector::Vec3 Quanterion::Vec4::rotatePoint(const Vector::Vec3* point, const Vector::Vec3* axis, const real& angle) {

    Quanterion::Vec4* temp = new Quanterion::Vec4(0, 0, 0, 0);
    Quanterion::Vec4 rotation = temp->quanterionFromAxisAngle(axis, angle);
    delete temp;
    Quanterion::Vec4 inverseRotation = rotation.getInverseQuaternion(&rotation);

    Quanterion::Vec4 pointQuat(0, point->x, point->y, point->z);
    Quanterion::Vec4 rotatedQuat = rotation * pointQuat * inverseRotation;

    return Vector::Vec3(rotatedQuat.x, rotatedQuat.y, rotatedQuat.z);
}


Quanterion::Vec4 Quanterion::Vec4::rotatePoint(const Vec4* point, const Vec4* axis, const real& angle) const {

    real cosHalfAngle = cos(angle / 2);
    real sinHalfAngle = sin(angle / 2);

    Quanterion::Vec4 rotationQuaternion;
    rotationQuaternion.w = cosHalfAngle;
    rotationQuaternion.x = sinHalfAngle * axis->x;
    rotationQuaternion.y = sinHalfAngle * axis->y;
    rotationQuaternion.z = sinHalfAngle * axis->z;

    Quanterion::Vec4 inverseRotationQuaternion = getInverseQuaternion(&rotationQuaternion);

    Quanterion::Vec4 result = rotationQuaternion * (*point) * inverseRotationQuaternion;

    return result;
}


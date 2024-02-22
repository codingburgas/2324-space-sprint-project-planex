#include "Object.hpp"

Object::Object() : orientation(Quaternion::identity()), position(Vector::Vec3()), transformMatrix(Matrix::Matrix3x4()) {}

Object::~Object() {}

void Object::setOrientation(const Quaternion& q) {
    orientation = q;
    updateTransformMatrix();
}

void Object::setPosition(const Vector::Vec3& pos) {
    position = pos;
    updateTransformMatrix();
}

Vector::Vec3 Object::getPosition() const {
    return position;
}

Quaternion Object::getOrientation() const {
    return orientation;
}

void Object::updateTransformMatrix() {
    transformMatrix.orientationAndPosition(orientation, position);
}

Vector::Vec3 Object::localToWorld(const Vector::Vec3& local) const {
    return transformMatrix.localToWorld(local);
}

Vector::Vec3 Object::worldToLocal(const Vector::Vec3& world) const {
    return transformMatrix.worldToLocal(world);
}

void Object::transformDirection(const Vector::Vec3& direction) {
    Vector::Vec3 localDir = worldToLocal(direction);
    Quaternion rotatedDir = orientation * Quaternion(0, localDir.x, localDir.y, localDir.z) * orientation.inverse();
    direction = Vector::Vec3(rotatedDir.i, rotatedDir.j, rotatedDir.k);
}

void Object::transformInverseDirection(const Vector::Vec3& direction) {
    Vector::Vec3 localDir = localToWorld(direction);
    Quaternion rotatedDir = orientation.inverse() * Quaternion(0, localDir.x, localDir.y, localDir.z) * orientation;
    direction = Vector::Vec3(rotatedDir.i, rotatedDir.j, rotatedDir.k);
}

void Object::translate(const Vector::Vec3& translation) {
    position += translation;
    updateTransformMatrix();
}

void Object::rotate(const Quaternion& rotation) {
    orientation = rotation * orientation;
    orientation.normalize();
    updateTransformMatrix();
}

void Object::rotateAround(const Vector::Vec3& axis, real angle) {
    Quaternion rotation(axis, angle);
    rotate(rotation);
}

void Object::scale(const Vector::Vec3& scaling) {
    transformMatrix.scale(scaling);
}

-+


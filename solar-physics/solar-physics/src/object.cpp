#include "Object.hpp"

Object::Object() {
    orientation = Quaternion(1.0, 0.0, 0.0, 0.0);
    position = Vector::Vec3(0.0, 0.0, 0.0);
    updateTransformMatrix();
}

Object::~Object() {

}

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
    return transformMatrix.transform(local);
}

Vector::Vec3 Object::worldToLocal(const Vector::Vec3& world) const {
    return transformMatrix.transformInverse(world);
}
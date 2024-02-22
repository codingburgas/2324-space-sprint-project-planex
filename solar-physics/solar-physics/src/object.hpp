#pragma once

#include "Quaternion.hpp"
#include "Matrix.hpp"
#include "Vector.hpp"

class Object {
private:
    Quaternion orientation;
    Vector::Vec3 position;
    Matrix::Matrix3x4 transformMatrix;

public:
    Object();
    ~Object();

    void setOrientation(const Quaternion& q);
    void setPosition(const Vector::Vec3& pos);
    Vector::Vec3 getPosition() const;
    Quaternion getOrientation() const;
    void updateTransformMatrix();

    Vector::Vec3 localToWorld(const Vector::Vec3& local) const;
    Vector::Vec3 worldToLocal(const Vector::Vec3& world) const;
    void transformDirection(const Vector::Vec3& direction);
    void transformInverseDirection(const Vector::Vec3& direction);

    void translate(const Vector::Vec3& translation);
    void rotate(const Quaternion& rotation);
    void rotateAround(const Vector::Vec3& axis, real angle);
    void scale(const Vector::Vec3& scaling);
    void applyForce(const Vector::Vec3& force);
    void applyTorque(const Vector::Vec3& torque);
};

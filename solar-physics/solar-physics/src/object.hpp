#pragma once

#include "quanterion.hpp"
#include "Vector.hpp"
#include "Matrix.hpp"

class Object {
private:
    Quaternion orientation; 
    Vector::Vec3 position;  
    Matrix::Matrix3x4 transformMatrix; 

public:
    Object(); 
    ~Objec
t(); 

    void setOrientation(const Quaternion& q);

    void setPosition(const Vector::Vec3& pos);

    Vector::Vec3 getPosition() const;

    Quaternion getOrientation() const;

    void updateTransformMatrix();

    Vector::Vec3 localToWorld(const Vector::Vec3& local) const;
    Vector::Vec3 worldToLocal(const Vector::Vec3& world) const;
};
#include "Matrix.hpp"

namespace Math {

    Matrix::Matrix() {
        for (int i = 0; i < 12; ++i) {
            data[i] = 0.0;
        }
    }

    Matrix::~Matrix() {

    }

    void Matrix::setOrientation(const Quaternion& q) {
        data[0] = 1 - (2 * q.j * q.j + 2 * q.k * q.k);
        data[1] = 2 * q.i * q.j + 2 * q.k * q.r;
        data[2] = 2 * q.i * q.k - 2 * q.j * q.r;
        data[3] = 0.0; 

        data[4] = 2 * q.i * q.j - 2 * q.k * q.r;
        data[5] = 1 - (2 * q.i * q.i + 2 * q.k * q.k);
        data[6] = 2 * q.j * q.k + 2 * q.i * q.r;
        data[7] = 0.0; 

        data[8] = 2 * q.i * q.k + 2 * q.j * q.r;
        data[9] = 2 * q.j * q.k - 2 * q.i * q.r;
        data[10] = 1 - (2 * q.i * q.i + 2 * q.j * q.j);
        data[11] = 0.0; 
    }

    void Matrix::setOrientationAndPos(const Quaternion& q, const Vector3& pos) {
        setOrientation(q);
        data[3] = pos.x;
        data[7] = pos.y;
        data[11] = pos.z;
    }

    Vector3 Matrix::transform(const Vector3& vector) const {
        real x = vector.x * data[0] + vector.y * data[1] + vector.z * data[2] + data[3];
        real y = vector.x * data[4] + vector.y * data[5] + vector.z * data[6] + data[7];
        real z = vector.x * data[8] + vector.y * data[9] + vector.z * data[10] + data[11];

        return Vector3(x, y, z);
    }

    Vector3 Matrix::transformInverse(const Vector3& vector) const {
        real  x = vector.x * data[0] + vector.y * data[4] + vector.z * data[8] - (data[3] * data[0] + data[7] * data[4] + data[11] * data[8]);
        real y = vector.x * data[1] + vector.y * data[5] + vector.z * data[9] - (data[3] * data[1] + data[7] * data[5] + data[11] * data[9]);
        real z = vector.x * data[2] + vector.y * data[6] + vector.z * data[10] - (data[3] * data[2] + data[7] * data[6] + data[11] * data[10]);

        return Vector3(x, y, z);
    }

    Vector3 Matrix::transformDirection(const Vector3& vector) const {
        real x = vector.x * data[0] + vector.y * data[1] + vector.z * data[2];
        real y = vector.x * data[4] + vector.y * data[5] + vector.z * data[6];
        real z = vector.x * data[8] + vector.y * data[9] + vector.z * data[10];

        return Vector3(x, y, z);
    }

    Vector3 Matrix::transformInverseDirection(const Vector3& vector) const {
        real x = vector.x * data[0] + vector.y * data[4] + vector.z * data[8];
        real y = vector.x * data[1] + vector.y * data[5] + vector.z * data[9];
        real z = vector.x * data[2] + vector.y * data[6] + vector.z * data[10];

        return Vector3(x, y, z);
    }
} 

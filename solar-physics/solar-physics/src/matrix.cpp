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

} 

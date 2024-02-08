#pragma once
#define real double

#include <cmath>
#include <iostream>

namespace Vector {
	class Vec3 {
	public:
		real x, y, z, magnitude;
		Vec3(const real x, const real y, const real z) : x(x), y(y), z(z) {}; // constructor
		
		auto operator*=(const Vec3* vector) {
			this->x *= vector->x;
			this->y *= vector->y;
			this->z *= vector->z;
		}

		auto operator+=(Vec3* vector) {
			this->x += vector->x;
			this->y += vector->y;
			this->z += vector->z;
		}

		auto operator-=(const Vec3* vector) {
			this->x -= vector->x;
			this->y -= vector->y;
			this->z -= vector->z;
		}

		Vec3 operator*(const real& value) const {
			return Vec3(x * value, y * value, z * value);
		}

		Vec3 operator+(const Vec3* vector) const {
			return Vec3(this->x + vector->x, this->y + vector->y, this->z + vector->z);
		}

		Vec3 operator-(const Vec3* vector) const {
			return Vec3(this->x - vector->x, this->y - vector->y, this->z - vector->z);
		}

		auto invert(Vec3* vector) const {
			vector->x = -(vector->x);
			vector->y = -(vector->y);
			vector->z = -(vector->z);
		}

		auto getMagnitude3D(Vec3* vector) const {
			return sqrt(vector->x * vector->x + vector->y * vector->y + vector->z * vector->z);
		}

		auto toUnitVector(Vec3* vector) const {
			real magnitude = vector->getMagnitude3D(vector);
			if (magnitude > 0) {
				vector->x = ((vector->x) / magnitude);
				vector->y = ((vector->y) / magnitude);
				vector->z = ((vector->z) / magnitude);
			}
			else {
				vector->x = 0, vector->y = 0, vector->z = 0;
			}
		}

		void addScaledVector(const Vec3* vector, const real& scale) {
			this->x = vector->x + vector->x * scale;
			this->y = vector->y + vector->y * scale;
			this->z = vector->z + vector->z * scale;
		}

		void print() const {
			std::cout << x << " " << y << " " << z;
		}

		Vec3 getChangePosVec3(Vec3* vector1, Vec3* vector2) {
			return Vec3(fabs(vector1->x - vector2->x), fabs(vector1->y - vector2->x), fabs(vector1->z - vector2->z));
		}

		 auto scalarProduct(Vec3* vector) const {
			 return (x * vector->x) + (y * vector->y) + (z * vector->z);
		}

	};

	class Quartenion {
	public:
		real x, y, z, q;
	};
}
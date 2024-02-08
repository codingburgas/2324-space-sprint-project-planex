#pragma once
#define real double

#include <cmath>

namespace Vector {
	class Vec3 {
	public:
		real x, y, z, magnitude;
		Vec3(const real x, const real y, const real z) : x(x), y(y), z(z) {}; // constructor
		Vec3() : x(0), y(0), z(0) {}; // default constructor
		
		void operator*=(const Vec3* vector) {
			this->x *= vector->x;
			this->y *= vector->y;
			this->z *= vector->z;
		}

		void operator+=(const Vec3* vector) {
			this->x += vector->x;
			this->y += vector->y;
			this->z += vector->z;
		}

		void operator-=(const Vec3* vector) {
			this->x -= vector->x;
			this->y -= vector->y;
			this->z -= vector->z;
		}

		Vec3 operator*(const real value) const {
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

		void getMagnitude() {
			magnitude = sqrt(x * x + y * y + z * z);
		}

		void toUnitVector(Vec3* vector) {
			vector->getMagnitude();
			real& mag = vector->magnitude;
			if (mag > 0) {
				vector->x = ((vector->x) / mag);
				vector->y = ((vector->y) / mag);
				vector->z = ((vector->z) / mag);
			}
		}


	private:
		real padding; // padding to optimize for 4 float nums;
	};
}
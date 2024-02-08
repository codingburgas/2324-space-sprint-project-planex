#pragma once
#define real double
#define fake float;

#include <cmath>
#include <iostream>
using std::cin, std::cout, std::endl;

namespace Vector {
	class Vec3 {
	public:
		real x, y, z;
		bool normalised = false;
		Vec3(const real x, const real y, const real z) : x(x), y(y), z(z) {}; // constructor
		Vec3() : x(0), y(0), z(0) {};
		
		auto operator*=(real& value) {
			this->x *= value;
			this->y *= value;
			this->z *= value;
		}

		auto operator+=(Vec3* vector){
			this->x += vector->x;
			this->y += vector->y;
			this->z += vector->z;
		}

		auto operator-=(const Vec3* vector) {
			this->x -= vector->x;
			this->y -= vector->y;
			this->z -= vector->z;
		}

		auto operator*(const real& value) const {
			return Vec3(x * value, y * value, z * value);
		}

		auto operator+(const Vec3* vector) const {
			return Vec3(this->x + vector->x, this->y + vector->y, this->z + vector->z);
		}

		auto operator-(const Vec3* vector) const {
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

		auto toUnitVector(Vec3* vector) { 
			real magnitude = vector->getMagnitude3D(vector);
			normalised = true;

			if (magnitude > 0) {
				vector->x = ((vector->x) / magnitude);
				vector->y = ((vector->y) / magnitude);
				vector->z = ((vector->z) / magnitude);
			}
			else 
				vector->x = 0, vector->y = 0, vector->z = 0;
		}

		auto addScaledVector(const Vec3* vector, const real& scale) {
			this->x = vector->x + vector->x * scale;
			this->y = vector->y + vector->y * scale;
			this->z = vector->z + vector->z * scale;
		}

		void print() const {
			cout << x << " " << y << " " << z;
		}

		Vec3 getChangePosVec3(Vec3* vector1, Vec3* vector2) {
			return Vec3(fabs(vector1->x - vector2->x), fabs(vector1->y - vector2->x), fabs(vector1->z - vector2->z));
		}

		 auto scalarProduct(Vec3* vector) const {
			 return (this->x * vector->x) + (this->y * vector->y) + (this->z * vector->z);
		}

		 real getTrigonometryScalar(Vec3* vector1,Vec3* vector2 , real& cosine) const {
			 auto mag1 = getMagnitude3D(vector1), mag2 = getMagnitude3D(vector2);
			 if (vector1->normalised == true and vector2->normalised == true)
				 return cos(cosine);
			 else if (vector1->normalised == true and vector2->normalised == true)
				 return mag2 * cos(cosine);
			 return (mag1 * mag2 * cos(cosine));
		}

		 auto getCrossProduct(Vec3* vector) const {
			 return (this->x * vector->x) - (this->y * vector->y) - (this->z * vector->z);
		 }

		 
	private:
		real padding;
	};

	class Quaternion {
	public:
		real x, y, z, q;
	};
}

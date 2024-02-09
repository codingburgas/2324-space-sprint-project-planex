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

		auto operator+=(const std::unique_ptr<Vec3> vector){
			this->x += vector->x;
			this->y += vector->y;
			this->z += vector->z;
		}

		auto operator-=(const std::unique_ptr<Vec3> vector) {
			this->x -= vector->x;
			this->y -= vector->y;
			this->z -= vector->z;
		}

		auto operator*(const real& value) const {
			return Vec3(x * value, y * value, z * value);
		}

		auto operator+(const std::unique_ptr<Vec3> vector) const {
			return Vec3(this->x + vector->x, this->y + vector->y, this->z + vector->z);
		}

		auto operator-(const std::unique_ptr<Vec3> vector) const {
			return Vec3(this->x - vector->x, this->y - vector->y, this->z - vector->z);
		}


		auto invert(std::unique_ptr<Vec3> vector) const {
			vector->x = -(vector->x);
			vector->y = -(vector->y);
			vector->z = -(vector->z);
		}

		real getMagnitude3D(std::shared_ptr<Vec3> vector) {
			return sqrt(vector->x * vector->x + vector->y * vector->y + vector->z * vector->z);
		}

		real toUnitVector(std::shared_ptr<Vec3> vector) { 
			real magnitude = vector->getMagnitude3D(vector);
			vector->normalised = true;

			if (magnitude > 0) {
				vector->x = ((vector->x) / magnitude);
				vector->y = ((vector->y) / magnitude);
				vector->z = ((vector->z) / magnitude);
			}
			else 
				vector->x = 0, vector->y = 0, vector->z = 0;
		}

		auto addScaledVector(std::unique_ptr<Vec3> vector1, std::unique_ptr<Vec3> vector2, const real& scale) {
			vector1->x = vector2->x + vector2->x * scale;
			vector1->y = vector2->x + vector2->y * scale;
			vector1->z = vector2->z + vector2->z * scale;
		}

		void print() const {
			cout << x << " " << y << " " << z;
		}

		Vec3 getChangePosVec3(const std::unique_ptr<Vec3> vector1, const std::unique_ptr<Vec3> vector2) {
			return Vec3(fabs(vector1->x - vector2->x), fabs(vector1->y - vector2->x), fabs(vector1->z - vector2->z));
		}

		 auto scalarProduct(const std::unique_ptr<Vec3> vector1, const std::unique_ptr<Vec3> vector2) const {
			 return (vector1->x * vector2->x) + (vector1->y * vector2->y) + (vector1->z * vector2->z);
		}

		 auto crossProduct(std::unique_ptr<Vec3> vector1, std::unique_ptr<Vec3> vector2) const {
			 return (vector1->x * vector2->x) - (vector1->y * vector2->y) - (vector1->z * vector2->z);
		 }

		 real getTrigonometryScalar(const std::shared_ptr<Vec3> vector1, const std::shared_ptr<Vec3> vector2, real& relationalDegree) const {
			 auto mag1 = vector1->getMagnitude3D(vector1), mag2 = vector2->getMagnitude3D(vector2);
			 if (vector1->normalised == true and vector2->normalised == true)
				 return cos(relationalDegree);
			 else if (vector1->normalised == true and vector2->normalised == false)
				 return mag2 * cos(relationalDegree);
			 return (mag1 * mag2 * cos(relationalDegree));
		}

		 real getTrigonometryCross(const std::shared_ptr<Vec3> vector1, const std::shared_ptr<Vec3> vector2, real& relationalDegree) {
			 auto mag1 = vector1->getMagnitude3D(vector1), mag2 = getMagnitude3D(vector2);
			 if (vector1->normalised == true and vector2->normalised == true)
				 return sin(relationalDegree);
			 else if (vector1->normalised == true and vector2->normalised == false)
				 return mag2 * sin(relationalDegree);
			 return (mag1 * mag2 * sin(relationalDegree));
		 }
		 
	private:
		real padding;
	};

	class Quaternion {
	public:
		real x, y, z, q;
	};
}

#pragma once
#define real double
#define fake float

#include <cmath>
#include <iostream>
#include <vector>
using std::cin, std::cout, std::endl;

namespace Vector {

	class Vec3 {

	public:
		real x, y, z;
		bool normalised = false;
		Vec3(real x, real y, real z) : x(x), y(y), z(z) {}; // constructor
		Vec3() : x(0), y(0), z(0) {};


		friend std::ostream& operator<<(std::ostream& os, const Vec3& vec) {
			return os << "(" << vec.x << ", " << vec.y << ", " << vec.z << ")";
		}
		
		void operator*=(real& value) {
			this->x *= value;
			this->y *= value;
			this->z *= value;
		}

		void operator+=(Vec3& vector) {
			this->x += vector.x;
			this->y += vector.y;
			this->z += vector.z;
		}

		void operator-=(Vec3& vector) {
			this->x -= vector.x;
			this->y -= vector.y;
			this->z -= vector.z;
		}

		Vec3 operator*(const real& value) const {
			return Vec3(x * value, y * value, z * value);
		}

		Vec3 operator+(Vec3& vector) const {
			return Vec3(this->x + vector.x, this->y + vector.y, this->z + vector.z);
		}

		Vec3 operator-(Vec3& vector) const {
			return Vec3(this->x - vector.x, this->y - vector.y, this->z - vector.z);
		}

		Vec3 operator/(real scalar) const {
			return Vec3(x / scalar, y / scalar, z / scalar);
		}

		//@brief invert coordinates
		void invert(Vec3& vector) const;


		//@brief get straight line of change in 3D space
		real getMagnitude3D(const Vec3& vector);


		//@brief normalizing vector
		void toUnitVector(Vec3& vector);


		//@brief add scaled vector -> particularly useful for when dealing with speed
		void addScaledVector(Vec3& vector, real scale)
		{
			this->x += vector.x * scale;
			this->y += vector.y * scale;
			this->z += vector.z * scale;
		}

		void print() const {
			cout << x << " " << y << " " << z;
		}

		//@brief get change of position in 3D space
		Vec3 getChangePosVec3(const Vec3& vector1, const Vec3& vector2) const;


		//@brief returns a whole number of indirect multiplying of vectors
		real scalarProduct(Vec3& vector1, const Vec3& vector2) const;

		//@brief returns a 3d vector of indirect multiplying of vectors
		Vec3 crossProduct(Vec3& vector1, Vec3& vector2) const;


		real getTrigonometryScalar(Vec3& vector1, Vec3& vector2, real& relationalDegree);
		real getTrigonometryCross(Vec3& vector1, Vec3& vector2, real& relationalDegree);
		std::vector<Vec3> orthonormalBasis(Vec3& vector1, Vec3& vector2);

		Vec3 getVelocity(Vec3& vector1, Vec3& vector2, real& timePassed);
		Vec3 getAcceleration(Vec3& pos1, Vec3& pos2, real timePassed, Vec3& startVelocity);
		std::vector<real> getSpeedAndDirection(Vec3& velocity);

		void updatePosition(Vec3& velocity, real& time);

		
	private:
		real padding;
	};

}

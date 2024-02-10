#include "vector.hpp"

void Vector::Vec3::invert(Vec3* vector) const {
	vector->x = -(vector->x);
	vector->y = -(vector->y);
	vector->z = -(vector->z);
}

real Vector::Vec3::getMagnitude3D(const Vec3* vector) {
	return sqrt(vector->x * vector->x + vector->y * vector->y + vector->z * vector->z);
}

void Vector::Vec3::toUnitVector(Vec3* vector) {
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

void Vector::Vec3::addScaledVector(Vec3* vector1, Vec3* vector2, const real& scale) const {
	vector1->x = vector1->x + (vector2->x * scale);
	vector1->y = vector1->y + (vector2->y * scale);
	vector1->z = vector1->z + (vector2->z * scale);
}

Vector::Vec3 Vector::Vec3::getChangePosVec3(const Vec3* vector1, const Vec3* vector2) const {
	return Vec3(fabs(vector1->x - vector2->x), fabs(vector1->y - vector2->y), fabs(vector1->z - vector2->z));
}

real Vector::Vec3::scalarProduct(Vec3* vector1, const Vec3* vector2) const {
	return (vector1->x * vector2->x) + (vector1->y * vector2->y) + (vector1->z * vector2->z);
}

Vector::Vec3 Vector::Vec3::crossProduct(Vec3* vector1, Vec3* vector2) const {

	real* x = new real((vector1->y * vector2->z) - (vector1->z * vector2->y));
	real* y = new real((vector1->z * vector2->x) - (vector1->x * vector2->z));
	real* z = new real((vector1->x * vector2->y) - (vector1->y * vector2->x));

	return Vec3(*x, *y, *z);
	delete x, y, z;

}

real Vector::Vec3::getTrigonometryScalar(Vec3* vector1, Vec3* vector2, real& relationalDegree) {

	auto mag1 = vector1->getMagnitude3D(vector1), mag2 = vector2->getMagnitude3D(vector2);

	if (vector1->normalised == true and vector2->normalised == true)
		return cos(relationalDegree);

	else if (vector1->normalised == true and vector2->normalised == false)
		return mag2 * cos(relationalDegree);

	return (mag1 * mag2 * cos(relationalDegree));
}

real Vector::Vec3::getTrigonometryCross(Vec3* vector1, Vec3* vector2, real& relationalDegree) {

	auto mag1 = vector1->getMagnitude3D(vector1), mag2 = vector2->getMagnitude3D(vector2);

	if (vector1->normalised == true and vector2->normalised == true)
		return sin(relationalDegree);

	else if (vector1->normalised == true and vector2->normalised == false)
		return mag2 * sin(relationalDegree);

	return (mag1 * mag2 * sin(relationalDegree));
}

std::vector<Vector::Vec3> Vector::Vec3::orthonormalBasis(Vec3* vector1, Vec3* vector2) {

	auto product1 = new Vec3(vector1->crossProduct(vector1, vector2));
	Vec3* vector3 = product1;

	if (vector1->getMagnitude3D(vector3) == 0)
		return std::vector<Vec3>{0};

	auto product2 = new Vec3(vector1->crossProduct(vector3, vector1));
	vector2 = product2;
	vector1->toUnitVector(vector1), vector2->toUnitVector(vector2), vector3->toUnitVector(vector3);
	std::vector<Vec3> orthonormalBasis{ *(vector1), *(vector2), *(vector3) };

	delete product1, product2;
	return orthonormalBasis;
}

auto Vector::Vec3::getVelocity(Vec3* vector1, Vec3* vector2, real& timePassed){
	auto changedPos = vector1->getChangePosVec3(vector1, vector2);
	auto& velocity = changedPos;

	velocity.x = velocity.x / timePassed;
	velocity.y = velocity.y / timePassed;
	velocity.z = velocity.z / timePassed;

	return velocity;

}

Vector::Vec3 Vector::Vec3::getAcceleration(Vec3* pos1, Vec3* pos2, real timePassed, Vec3* startVelocity){

		auto velocity = pos1->getVelocity(pos1, pos2, timePassed);
		Vec3 endVelocity (velocity.x * timePassed, velocity.y * timePassed, velocity.z * timePassed);
		Vec3 deltaV (endVelocity.x - startVelocity->x, endVelocity.y - startVelocity->y, endVelocity.z - startVelocity->z);
			 
		return Vec3(deltaV.x / timePassed, deltaV.y / timePassed, deltaV.z / timePassed);
}


auto Vector::Vec3::getSpeedAndDirection(Vec3* velocity) {
	auto speed = velocity->getMagnitude3D(velocity);
	velocity->toUnitVector(velocity);
	std::vector<real> utils{ velocity->x, velocity->y, velocity->z, speed };
	return utils;
}


void Vector::Vec3::updatePosition(Vec3& vector, Vec3& velocity, real& time) const {
	vector.addScaledVector(&vector, &velocity, time);
}
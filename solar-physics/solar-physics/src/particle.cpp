#include "particle.hpp"

double Particle::Particle::gravity = 40;

void Particle::Particle::setMass(Particle* particle, double& mass) {
	particle->mass = mass;
}

void Particle::Particle::setInversedMass(Particle* particle, double& mass) {
	particle->inversedMass = 1 / mass;
}

double Particle::Particle::gravitationalPull(Particle* particle, double& gravity = Particle::Particle::gravity) const {
	return particle->mass * gravity;
}

auto Particle::Particle::positionUpdateParticle(Particle* particle, double& time) const {

	particle->position->addScaledVector(*(particle->velocity), time);
	particle->position->addScaledVector(*(particle->acceleration), time * time * 0.5);

}

void Particle::Particle::updateVelocity(double& time) {

	assert(time > 0.000);

	position->addScaledVector(*(velocity), time);
	Vector::Vec3 resultingAcceleration = *(acceleration);
	resultingAcceleration.addScaledVector(*(forceAccum), inversedMass);

	velocity->addScaledVector(resultingAcceleration, time);

	clearForces();

}

void Particle::Particle::clearForces() {
	this->forceAccum->x *= 0;
	this->forceAccum->y *= 0;
	this->forceAccum->z *= 0;
}

void Particle::Particle::addForce(Vector::Vec3* vector) {
	*forceAccum += *vector;
}


void Particle::Particle::celestialVelocity(double gravityConst, double& massParent, double& orbitRadius, double& theta) {
	gravityConst = Particle::Particle::gravity;
	double v = sqrt((gravityConst * massParent) / orbitRadius);
	double vx = v * cos(theta); 
	double vz = v * sin(theta);

	this->velocity->x = vx;
	this->velocity->z = vz;
	this->velocity->y = 0;
}
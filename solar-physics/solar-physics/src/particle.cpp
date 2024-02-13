#include "particle.hpp"

real Particle::Particle::gravity = 40;

void Particle::Particle::setMass(Particle* particle, real& mass) {
	particle->mass = mass;
}

void Particle::Particle::setInversedMass(Particle* particle, real& mass) {
	particle->inversedMass = 1 / mass;
}

real Particle::Particle::gravitationalPull(Particle* particle, real& gravity = Particle::Particle::gravity) const {
	return particle->mass * gravity;
}

auto Particle::Particle::positionUpdateParticle(Particle* particle, real& time) const {

	particle->position->addScaledVector(*(particle->velocity), time);
	particle->position->addScaledVector(*(particle->acceleration), time * time * 0.5);

}

void Particle::Particle::updateVelocity(real& time) {

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

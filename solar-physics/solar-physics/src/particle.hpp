#pragma once
#include <iostream>
#include <cmath>
#include <assert.h>
#include "vector.hpp"
#define real double
#define pow powf
#define MATH_PI 3.1415926

namespace Particle {

	class Particle {
	public:
		const real drag;
		static real gravity;
		Vector::Vec3* acceleration;
		Vector::Vec3* velocity;
		Vector::Vec3* position;
		Vector::Vec3* forceAccum;
		Particle() : drag(0.999) {}


		//@brief set mass of an object -> returns void
		void setMass(Particle* particle, real& mass);

		//@brief set inversed mass -> 1/m
		void setInversedMass(Particle* particle, real& mass);

		//@brief newtown's first second law
		real gravitationalPull(Particle* particle, real& gravity) const;

		//@brief updates position -> void, utilizes Vec3::addScaledVector
		auto positionUpdateParticle(Particle* particle, real& time) const;

		//@brief updates velocity based on Newton's and Euler's principle
		void updateVelocity(real& time);

		//@brief clears all active forces
		void clearForces();

		//@brief adds forces
		void addForce(Vector::Vec3* vector);

		void celestialVelocity(real gravityConst, real& massParent, real& orbitRadius, real& theta);

		 

	protected:
		real mass, inversedMass;
	};
}
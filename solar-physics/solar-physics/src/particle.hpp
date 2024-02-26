#pragma once
#include <iostream>
#include <cmath>
#include <assert.h>
#include "vector.hpp"
#define pow powf
#define MATH_PI 3.1415926

namespace Particle {

	class Particle {
	public:
		const double drag;
		static double gravity;
		Vector::Vec3* acceleration;
		Vector::Vec3* velocity;
		Vector::Vec3* position;
		Vector::Vec3* forceAccum;
		Particle() : drag(0.999),acceleration(new Vector::Vec3), velocity(new Vector::Vec3) {}


		//@brief set mass of an object -> returns void
		void setMass(Particle* particle, double& mass);

		//@brief set inversed mass -> 1/m
		void setInversedMass(Particle* particle, double& mass);

		//@brief newtown's first second law
		double gravitationalPull(Particle* particle, double& gravity) const;

		//@brief updates position -> void, utilizes Vec3::addScaledVector
		auto positionUpdateParticle(Particle* particle, double& time) const;

		//@brief updates velocity based on Newton's and Euler's principle
		void updateVelocity(double& time);

		//@brief clears all active forces
		void clearForces();

		//@brief adds forces
		void addForce(Vector::Vec3* vector);

		void celestialVelocity(double gravityConst, double& massParent, double& orbitRadius, double& theta);

		 

	protected:
		double mass, inversedMass;
	};
}
#pragma once
#define real double
#define fake float

#include <cmath>
#include <iostream>
#include <vector>

class Vector3 {
public:
    float x, y, z;

    Vector3() : x(0), y(0), z(0) {}
    Vector3(float x, float y, float z) : x(x), y(y), z(z) {}

    Vector3& operator*=(const float scalar) {
        x *= scalar;
        y *= scalar;
        z *= scalar;
        return *this;
    }
    Vector3& operator*=(const Vector3& other) {
        x *= other.x;
        y *= other.y;
        z *= other.z;
        return *this;
    }
};

class Particle {
public:
    Vector3 position;
    Vector3 velocity;
    Vector3 acceleration;
    float damping;

    Particle() : damping(0.995f) {}

    void integrate(float duration) {
        velocity *= pow(damping, duration);

        position.x += velocity.x * duration;
        position.y += velocity.y * duration;
        position.z += velocity.z * duration;

        velocity.x += acceleration.x * duration;
        velocity.y += acceleration.y * duration;
        velocity.z += acceleration.z * duration;
    }
};

int main() {
    Particle particle;
    particle.velocity = Vector3(1, 0, 0);
    particle.velocity *= 2.0f;
    Vector3 scaleVector(2.0f, 2.0f, 2.0f);
    particle.velocity *= scaleVector;

    return 0;
}

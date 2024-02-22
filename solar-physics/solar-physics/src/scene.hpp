#pragma once

#include <vector>
#include "Object.hpp"

class Scene {
private:
    std::vector<Object> objects;

public:
    Scene();
    ~Scene();

    void addObject(const Object& object);
    void removeObject(int index);
    void clearScene();
    const std::vector<Object>& getObjects() const;
    void update();
};

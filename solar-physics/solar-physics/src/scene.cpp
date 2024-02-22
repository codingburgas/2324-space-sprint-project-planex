#include "Scene.hpp"

Scene::Scene() {}

Scene::~Scene() {}

void Scene::addObject(const Object& object) {
    objects.push_back(object);
}

void Scene::removeObject(int index) {
    if (index >= 0 && index < objects.size()) {
        objects.erase(objects.begin() + index);
    }
}

void Scene::clearScene() {
    objects.clear();
}

const std::vector<Object>& Scene::getObjects() const {
    return objects;
}

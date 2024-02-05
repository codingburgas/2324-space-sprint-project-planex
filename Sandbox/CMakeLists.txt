cmake_minimum_required(VERSION 3.10)
project(Sandbox)

set(CMAKE_CXX_STANDARD 11)

# Find the GLFW3 library
find_package(glfw3 3.3 REQUIRED)

# Find the OpenGL library
find_package(OpenGL REQUIRED)

add_executable(YourProjectName main.cpp)

# Link against GLFW and OpenGL
target_link_libraries(YourProjectName glfw ${OPENGL_gl_LIBRARY})

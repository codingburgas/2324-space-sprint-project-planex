cmake_minimum_required(VERSION 3.10)
project(YourProjectName)

set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED True)

# Include GLFW headers
include_directories(${PROJECT_SOURCE_DIR}/include/glfw)

# Add the executable
add_executable(${PROJECT_NAME} main.cpp)

# Specify the library path
link_directories(${PROJECT_SOURCE_DIR}/lib)

# Link the executable to the GLFW library
target_link_libraries(${PROJECT_NAME} glfw3)

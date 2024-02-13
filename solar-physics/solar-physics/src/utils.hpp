#include <cmath>
#include <iostream>
#include "windows.h"
#define MATH_PI 3.14159
#define ARENA_SIZE 1024 //1mb
#define buffer_var size_t


//@brief -> class which includes a memory arena, and useful math definitions

namespace Utils {
	class Memory {
	public:

		DWORD flags[5] = { HEAP_GENERATE_EXCEPTIONS, HEAP_NO_SERIALIZE, HEAP_ZERO_MEMORY, HEAP_CREATE_ENABLE_TRACING };
		DWORD configDefault = flags[0] | flags[1] | flags[2] | flags[3];

		Memory(buffer_var size) : size(size), move(0) {
			block = new char[size];
		};

		Memory() : size(0), move(0) {};

		~Memory() {
			delete block;
		}

		auto current() const {
			return this->size;
		}

		auto remaining() const {
			return (this->size - this->byttesWritten);
		}


		void* allocate(buffer_var size) {
			HEAP = HeapCreate(configDefault, size, size);
			return &HEAP;
		}

	protected:

		char* block;
		buffer_var size, move, byttesWritten;

		Memory(const Memory&) = delete;
		Memory& operator=(const Memory&) = delete;

		HANDLE HEAP;

	};

	class operatorOverload {
		void* operator new(size_t size) {
			return obj.allocate(size);
		}

		void operator delete(void* target) {
			//implement here
		}
	private:
		static Utils::Memory obj;
	};

}
#include "utils.hpp"


HANDLE Utils::Memory::createHeapObject(Utils::Memory& instance, const buffer_var* size) const {
	instance.HEAP = HeapCreate(instance.config, *size, *size);
}
DECLSPEC_ALLOCATOR LPVOID Utils::Memory::allocate(Utils::Memory& instance, const buffer_var* size) const {
	LPVOID current = HeapAlloc(instance.HEAP, instance.config, *size);	
	return current;
}
auto Utils::Memory::destroyHeapObject(HANDLE& HEAP) const {
	HeapDestroy(HEAP);
}
auto Utils::Memory::deallocate(Utils::Memory& instance) const {

}
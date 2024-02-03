// LoadingBar.solid.tsx
import { createSignal, onCleanup } from 'solid-js';

const LoadingBar = () => {
  const [loadingProgress, setLoadingProgress] = createSignal(0);

  // Simulating loading progress
  const simulateLoading = () => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 500);

    onCleanup(() => clearInterval(interval));
  };

  simulateLoading(); // Start simulating loading progress

  return (
    <div class="w-1/2 h-24 bg-white rounded-md overflow-hidden mt-8">
      <div class={`h-full bg-blue-500 transition-width duration-500 ease-in-out`} style={{ width: `${loadingProgress()}%` }}></div>
    </div>
  );
};	

export default LoadingBar;

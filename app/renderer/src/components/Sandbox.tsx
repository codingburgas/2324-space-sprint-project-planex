import { createSignal, onCleanup } from "solid-js";

// Replace the following SVG path data with your actual icon SVG paths
const svgCodeIconPathData = "../Images/rubber.svg"; // Replace with your code icon path data
const svgDiamondIconPathData = "M...Z"; // Replace with your diamond icon path data

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" class="h-8 w-8 fill-current text-white">
    <path d={svgCodeIconPathData} />
  </svg>
);

const DiamondIcon = () => (
  <svg viewBox="0 0 24 24" class="h-8 w-8 fill-current text-white">
    <path d={svgDiamondIconPathData} />
  </svg>
);

const CombinedComponent = () => {
  const [currentTime, setCurrentTime] = createSignal(new Date().toLocaleTimeString());

  // Update the time every second
  const interval = setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);

  // Cleanup the interval when the component is unmounted
  onCleanup(() => clearInterval(interval));

  return (
    <div class="flex flex-col h-screen w-screen bg-black text-white">
      <header class="flex justify-between items-center p-4 border-b border-gray-800">
        <div>Current: Sandbox</div>
        <div>{currentTime()}</div>
      </header>

      <div class="flex-grow flex flex-col justify-between items-center p-4">
        <div class="flex space-x-4">
          <CodeIcon />
          <DiamondIcon />
        </div>
        <div class="p-4 text-2xl">1.0.2</div>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Export
        </button>
      </div>
    </div>
  );
};

export default CombinedComponent;
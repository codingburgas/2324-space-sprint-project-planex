import { createSignal, onCleanup, createEffect } from "solid-js";

const CombinedComponent = () => {
  const yellowBG = "bg-yellow-500";
  const greenBG = "bg-green-500";
  const initialBG = "bg-red-500";

  const [progress, setProgress] = createSignal(0);
  const [loadingColor, setLoadingColor] = createSignal(initialBG);

  const interval = setInterval(() => {
    setProgress((prev) => (prev < 100 ? prev + 5 : 100));
  }, 500);

  onCleanup(() => clearInterval(interval));

  createEffect(() => {
    if (progress() >= 33) {
      setLoadingColor(progress() >= 33 && progress() < 66 ? yellowBG : greenBG);
    }
  });

  return (
    <div class="__loading-screen text-center overflow-hidden h-screen w-screen" style={{ "font-family": "Inter, sans-serif" }}>
        <span class="text-5xl text-[#888] pt-[12rem] inline absolute left-[50%] -translate-x-[50%]"> The earth is almost 1 AU away from the sun (1.496e+8). </span>
        <div class="flex flex-col justify-center items-center h-screen bg-black">
            <div class="w-[45vw] flex flex-col items-center __loading-bar ">
                <div class="text-[#888] text-center text-5xl mb-8 ml-auto mr-0">
                    <span class="text-[#efefef] opacity-85 text-4xl"> {progress()}% Loaded </span>
                </div>
                <div class="w-full h-16 rounded-lg overflow-hidden border-solid border-x-[0.1rem] border-y-[0.1rem] border-[#efefef] border-opacity-75 mb-8">
                    <div
                    class={`h-full transition-width duration-500 ease-in-out rounded-md ${loadingColor()}`}
                    style={{ width: `${progress()}%` }}
                    ></div>
                </div>
                <span class="text-[#efefef] text-3xl opacity-85">loading textures.. </span>
            </div>
        </div>
    </div>
  );
};

export default CombinedComponent;
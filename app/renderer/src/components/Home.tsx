// Home.solid.tsx
import { createSignal } from 'solid-js';
import LoadingBar from './ProgresPage.tsx';

export default function Home() {
  const [backgroundColor, setBackgroundColor] = createSignal("bg-black");

  return (
    <div class={`h-screen flex flex-col justify-center items-center ${backgroundColor()}`}>
      <p class="text-gray-300 text-center self-start mb-32 text-5xl">The earth is almost 1 AU away from the sun (1.496e+8).</p>
      <LoadingBar />
    </div>
  );
}
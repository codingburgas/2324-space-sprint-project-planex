import mercury from './models/Mercury.tsx';
import sun from './models/Sun.tsx';
import earth from './models/Earth.tsx';
import jupiter from './models/Jupiter.tsx';
import mars from './models/Mars.tsx';
import saturn from './models/Saturn.tsx';
import neptune from './models/Neptune.tsx';
import uranus from './models/Uranus.tsx';
import { Canvas } from '@react-three/fiber'
import Sun from "./models/Sun"

export default function App() {
  return (
    <div id="canvas-container" className="flex-grow w-full h-full bg-red">
      <Canvas>
        <Sun />
      </Canvas>
    </div>
  );
}
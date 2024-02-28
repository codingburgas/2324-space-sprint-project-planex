import Sun from "./models/Sun.tsx"
import Mercury from './models/Mercury.tsx';
import Earth from './models/Earth.tsx';
import Jupiter from './models/Jupiter.tsx';
import Mars from './models/Mars.tsx';
import Saturn from './models/Saturn.tsx';
import Neptune from './models/Neptune.tsx';
import Uranus from './models/Uranus.tsx';
import { createRoot } from 'react-dom/client'
import { Canvas, useThree } from '@react-three/fiber'
import { useEffect } from 'react';
import * as THREE from 'three';
import Camera from "./Camera"
import Venus from './models/Venus.tsx';
import Pluto from './models/Pluto.tsx';
import { EXRLoader} from 'three/examples/jsm/loaders/EXRLoader.js';	


function SceneBackground() {
  const { scene, gl } = useThree();

  useEffect(() => {
    scene.background = new THREE.Color('red');
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.PCFSoftShadowMap;
    new EXRLoader()
  .load('../../public/stars.exr', function (texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture; 
  });
  }, [scene, gl]);

  return null;
}


export default function App() {
  return (
    <div id="canvas-container" className="flex-grow w-full h-full">
        <Canvas camera={{ fov: 75, position: [0, 0, 5] }} shadows={true}>
          <Camera />
          <SceneBackground />
          <ambientLight intensity={0.5} color={0x404040} />
          <Saturn />
          <Earth />
          <Neptune />
          <Mercury />
          <Mars />
          <Uranus />
          <Jupiter />
          <Sun />
          <Venus />
          <Pluto />
      </Canvas>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />)
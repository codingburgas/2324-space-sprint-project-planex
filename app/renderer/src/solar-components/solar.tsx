import Mercury from './models/Mercury.tsx';
import Earth from './models/Earth.tsx';
import Jupiter from './models/Jupiter.tsx';
import Mars from './models/Mars.tsx';
import Saturn from './models/Saturn.tsx';
import Neptune from './models/Neptune.tsx';
import Uranus from './models/Uranus.tsx';
import { Canvas, useThree } from '@react-three/fiber'
import { createRoot } from 'react-dom/client'
import Sun from "./models/Sun"
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei'

2
function SceneBackground() {
  const { scene, gl } = useThree();

  useEffect(() => {
    scene.background = new THREE.Color('red');
    gl.shadowMap.enabled = true;
    const loader = new THREE.TextureLoader();
    gl.shadowMap.type = THREE.PCFSoftShadowMap;
     loader.load('../../public/stars.png', (texture) => {
      scene.background = texture;
    });
  }, [scene, gl]);

  return null;
}


export default function App() {
  return (
    <div id="canvas-container" className="flex-grow w-full h-full">
<Canvas camera={{ fov: 75, position: [0, 0, 5] }}>
        <SceneBackground />
        <OrbitControls enableDamping={true} enableZoom={true} enabled={true} enablePan={true} enableRotate={true} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <Saturn />
        <Earth />
        <Neptune />
        <Mercury />
        <Mars />
      </Canvas>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />)

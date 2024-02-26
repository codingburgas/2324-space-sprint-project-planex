

import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import type { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    Sphere_Material_0: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

function CircleGeometry(radius: number, segments: number, center: THREE.Vector3): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];


  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    const x = center.x + radius * Math.cos(theta);
    const y = center.y;
    const z = center.z + radius * Math.sin(theta);
    vertices.push(x, y, z);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  return geometry;
}


export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('../../../public/jupiter.glb') as GLTFResult;
  const scaleFactor = 0.028;

  const groupRef = useRef<THREE.Group>(null);
  const [websocket, setWs] = useState<WebSocket | null>(null);
  const [currentCoords, setCurrentCoords] = useState<THREE.Vector3>();



useEffect(() => {
  
    const ws = new WebSocket('ws://localhost:8000');

    ws.addEventListener("open", (event) => {
        ws.send("Connection established");
    });

    setWs(ws);

    return () => {
        ws.close();
    };
}, []);

useFrame(() => {
    if (websocket && websocket.readyState === WebSocket.OPEN) {
      if (groupRef.current) 
        setCurrentCoords(groupRef.current.position.clone());
    }
    websocket?.send(JSON.stringify({ type: 'jupiter', coords: currentCoords }));
});

  return (
    <group>
      <group {...props} dispose={null} position={[-160, 5, 0]} scale={[scaleFactor, scaleFactor, scaleFactor]} ref={groupRef}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Sphere_Material_0.geometry}
              material={materials.Material}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[scaleFactor * 101, scaleFactor * 101, scaleFactor * 101]}
              castShadow 
              receiveShadow
            />
          </group>
        </group>
      </group>
      <line geometry={CircleGeometry(280, 64, new THREE.Vector3(120, 0, 0))}>
        <lineBasicMaterial color={`#ADAAA8 `} transparent opacity={0.5} />
      </line>
    </group>
  );
}

useGLTF.preload('../../../public/jupiter.glb');


import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
  }
  materials: {
    ['Scene_-_Root']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

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


type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Model(props: JSX.IntrinsicElements['group']) {

  const { nodes, materials } = useGLTF('../../../public/pluto.glb') as GLTFResult


  const groupRef = useRef<THREE.Group>(null);
  const [websocket, setWs] = useState<WebSocket | null>(null);


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
    if (websocket && websocket.readyState === WebSocket.OPEN && groupRef.current) {
      const position = groupRef.current.position.clone();
      const theta = Math.atan2(groupRef.current.position.z, groupRef.current.position.x);
      websocket.send(JSON.stringify({ type: 'mercury', coords: {x: position.x, y: position.y, z: position.z}, theta: theta}));
    }
  });


  return (
    <group>
      <group {...props} dispose={null} ref={groupRef} >
        <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={5.28} userData={{ name: 'Object_4' }} position={[-450, 0, 0]}  castShadow 
              receiveShadow/>
      </group>
      <line geometry={CircleGeometry(570, 64, new THREE.Vector3(120, 0, 0))}>
        <lineBasicMaterial color={`#ADAAA8 `} transparent opacity={0.5} />
      </line>
    </group>
  )
}

useGLTF.preload('../../../public/pluto.glb')
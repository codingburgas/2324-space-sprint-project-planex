/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 -t mars.glb 
Author: Mieke Roth (https://sketchfab.com/miekeroth)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mars-2b46962637ee4311af8f0d1d0709fbb2
Title: Mars
*/
import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF} from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import { useFrame } from "@react-three/fiber";


type GLTFResult = GLTF & {
  nodes: {
    mars_Material003_0: THREE.Mesh
    atmosphere_Material004_0: THREE.Mesh
  }
  materials: {
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.004']: THREE.MeshStandardMaterial
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
  const { nodes, materials } = useGLTF('../../../public/mars.glb') as GLTFResult

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
      websocket?.send(JSON.stringify({ type: 'mars', coords: currentCoords }));
      websocket.onmessage = function (event) {
          console.log(event.data);
        }
    }
});


  return (
    <group>
      <group {...props} dispose={null} position={[-85, 0, 0]} ref={groupRef}>
        <group scale={0.01}>
          <mesh geometry={nodes.mars_Material003_0.geometry} material={materials['Material.003']} rotation={[-Math.PI / 2, 0, 0]} scale={200}  castShadow 
              receiveShadow />
          <mesh geometry={nodes.atmosphere_Material004_0.geometry} material={materials['Material.004']} rotation={[-Math.PI / 2, 0, 0]} scale={350}  castShadow 
              receiveShadow />
        </group>
      </group>
      <line geometry={CircleGeometry(205, 64, new THREE.Vector3(120, 0, 0))}>
        <lineBasicMaterial color={`#ADAAA8 `} transparent opacity={0.5} />
      </line>
    </group>
  )
}
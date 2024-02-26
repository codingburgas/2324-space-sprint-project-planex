import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.Mesh
    Object_8: THREE.Mesh
    Object_11: THREE.Mesh
    Object_14: THREE.Mesh
    Object_16: THREE.Mesh
    Object_20: THREE.Mesh
    Object_23: THREE.Mesh
    Object_25: THREE.Mesh
  }
  materials: {
    material: THREE.MeshStandardMaterial
    material_0: THREE.MeshStandardMaterial
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
const groupScale = 0.07;

export default function Model(props: JSX.IntrinsicElements['group']) {

  const { nodes, materials } = useGLTF('../../../public/saturn.glb') as GLTFResult


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
      <group {...props} dispose={null} position={[-240, 0, 0]} scale={[groupScale, groupScale, groupScale]} ref={groupRef}>
        <group rotation={[-Math.PI / 2, 0, 0]} userData={{ name: 'saturn.3ds' }}>
          <group position={[-0.484, -3.627, 0]} rotation={[-1.571, -1.386, 0.001]} scale={220.595} userData={{ name: 'Circle' }}>
            <group userData={{ name: 'TooBig2' }}>
              <mesh geometry={nodes.Object_5.geometry} material={materials.material} position={[0.017, 0, 0.001]} rotation={[1.571, -0.002, -1.386]} scale={0.005} userData={{ name: 'Object_5' }}  castShadow 
              receiveShadow />
            </group>
            <group userData={{ name: 'TooBig3' }}>
              <mesh geometry={nodes.Object_8.geometry} material={materials.material} position={[0.017, 0, 0.001]} rotation={[1.571, -0.002, -1.386]} scale={0.005} userData={{ name: 'Object_8' }}  castShadow 
              receiveShadow />
            </group>
            <group userData={{ name: 'TooBig4' }}>
              <mesh geometry={nodes.Object_11.geometry} material={materials.material} position={[0.017, 0, 0.001]} rotation={[1.571, -0.002, -1.386]} scale={0.005} userData={{ name: 'Object_11' }}  castShadow 
              receiveShadow />
            </group>
            <group userData={{ name: 'TooBig5' }}>
              <mesh geometry={nodes.Object_14.geometry} material={materials.material} position={[0.017, 0, 0.001]} rotation={[1.571, -0.002, -1.386]} scale={0.005} userData={{ name: 'Object_14' }}  castShadow 
              receiveShadow />
            </group>
            <mesh geometry={nodes.Object_16.geometry} material={materials.material} position={[0.017, 0, 0.001]} rotation={[1.571, -0.002, -1.386]} scale={0.005} userData={{ name: 'Object_16' }}  castShadow 
              receiveShadow />
          </group>
          <group scale={100} userData={{ name: 'Sphere' }}>
            <group userData={{ name: 'TooBig0' }}>
              <mesh geometry={nodes.Object_20.geometry} material={materials.material_0} scale={0.01} userData={{ name: 'Object_20' }}  castShadow 
              receiveShadow />
            </group>
            <group userData={{ name: 'TooBig1' }}>
              <mesh geometry={nodes.Object_23.geometry} material={materials.material_0} scale={0.01} userData={{ name: 'Object_23' }}  castShadow 
              receiveShadow />
            </group>
            <mesh geometry={nodes.Object_25.geometry} material={materials.material_0} scale={0.01} userData={{ name: 'Object_25' }}  castShadow 
              receiveShadow />
          </group>
        </group>
      </group>
      <line geometry={CircleGeometry(360, 64, new THREE.Vector3(120, 0, 0))}>
        <lineBasicMaterial color={`#ADAAA8 `} transparent opacity={0.5} />
      </line>
    </group>
  )
}

useGLTF.preload('../../../public/saturn.glb')

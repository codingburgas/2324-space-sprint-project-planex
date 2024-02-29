
import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    venus_Material001_0: THREE.Mesh
    atmosphere_Material_0: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    Material: THREE.MeshStandardMaterial
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

  const { nodes, materials } = useGLTF('../../../public/mercury.glb') as GLTFResult

  const groupRef = useRef<THREE.Group>(null);
  const [websocket, setWs] = useState<WebSocket | null>(null);
  const [positionData, setPositionData] = useState({x: 480, y: 0, z: 0});

useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000');

    ws.addEventListener("open", (event) => {
        ws.send("Connection established");
    });

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
        if (data.type === "mercury"){
          setPositionData(data.coords);
        }
      }

    setWs(ws);

    return () => {
        ws.close();
    };
}, []);





  useFrame(() => {

    if (websocket && websocket.readyState === WebSocket.OPEN && groupRef.current) {
      const position = groupRef.current.position.clone();
      websocket.send(JSON.stringify({ type: 'mercury', coords: {x: position.x, y: 0, z: position.z}, theta: Math.atan2(groupRef.current.position.x, groupRef.current.position.z)}));
      groupRef.current.position.set(positionData.z, 0, positionData.x);
    }
});


  return (
    <group>
      <group {...props} dispose={null} position={[positionData.x, positionData.y, positionData.z]} ref={groupRef}>
        <group scale={0.01}>
          <mesh geometry={nodes.atmosphere_Material_0.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} scale={320}  castShadow 
              receiveShadow />
        </group>
      </group>
      <line geometry={CircleGeometry(60, 64, new THREE.Vector3(120, 0, 0))}>
        <lineBasicMaterial color={`#ADAAA8 `} transparent opacity={0.5} />
      </line>
    </group>
  )
}

useGLTF.preload('../../../public/mercury.glb')

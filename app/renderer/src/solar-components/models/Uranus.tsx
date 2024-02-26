/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 -t uranus.glb 
Author: Topson_Noble (https://sketchfab.com/Topson_Noble)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/planet-uranus-2b9de21987c6419ebe72df19e9c4163a
Title: Planet Uranus
*/

import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'
type GLTFResult = GLTF & {
  nodes: {
    rings_lambert3_0: THREE.Mesh
    rings_lambert4_0: THREE.Mesh
    rings_lambert5_0: THREE.Mesh
    rings_lambert2_0: THREE.Mesh
    uranus_uranus_shader_0: THREE.Mesh
  }
  materials: {
    lambert3: THREE.MeshStandardMaterial
    lambert4: THREE.MeshStandardMaterial
    lambert5: THREE.MeshStandardMaterial
    lambert2: THREE.MeshStandardMaterial
    uranus_shader: THREE.MeshStandardMaterial
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


type ActionName = 'rings|7. saturn.001Action.002' | 'rings|ringsAction' | 'rings|saturn_ringAction' | 'rings|Shader NodetreeAction' | 'rings|spatial cameraAction' | 'rings|SphereAction' | 'rings|SphereAction.002' | 'rings|uranus|Take 001|BaseLayer' | 'rings|venusAction' | 'rings|venusAction.001' | 'rings|venusAction.002' | 'rings|venusAction.003' | 'rings|venusAction.004' | 'rings|venusAction.005' | 'rings|venusAction.008' | 'uranus|7. saturn.001Action.002' | 'uranus|ringsAction' | 'uranus|saturn_ringAction' | 'uranus|spatial cameraAction' | 'uranus|SphereAction' | 'uranus|SphereAction.002' | 'uranus|uranus|Take 001|BaseLayer' | 'uranus|venusAction' | 'uranus|venusAction.001' | 'uranus|venusAction.002' | 'uranus|venusAction.003' | 'uranus|venusAction.004' | 'uranus|venusAction.005' | 'uranus|venusAction.008'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}
type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Model(props: JSX.IntrinsicElements['group']) {

  const groupRef = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF('../../../public/uranus.glb') as GLTFResult
  const { actions } = useAnimations(animations, groupRef)


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
      websocket?.send(JSON.stringify({ type: 'uranus', coords: currentCoords }));
      websocket.onmessage = function (event) {
          console.log(event.data);
        }
    }
});


  return (
    <group>
      <group ref={groupRef} {...props} dispose={null} position={[-330, 0, 0]} >
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="f029815b00e641df84e4fa9461089ab2fbx" rotation={[Math.PI / 2, 0, 0]} scale={3}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="uranus" position={[0, 0, 0]} rotation={[-0.818, 1.177, 0.869]} scale={3}>
                    <group name="rings">
                      <mesh name="rings_lambert3_0" geometry={nodes.rings_lambert3_0.geometry} material={materials.lambert3}  castShadow 
              receiveShadow />
                      <mesh name="rings_lambert4_0" geometry={nodes.rings_lambert4_0.geometry} material={materials.lambert4}  castShadow 
              receiveShadow />
                      <mesh name="rings_lambert5_0" geometry={nodes.rings_lambert5_0.geometry} material={materials.lambert5}  castShadow 
              receiveShadow />
                      <mesh name="rings_lambert2_0" geometry={nodes.rings_lambert2_0.geometry} material={materials.lambert2}  castShadow 
              receiveShadow />
                    </group>
                    <mesh name="uranus_uranus_shader_0" geometry={nodes.uranus_uranus_shader_0.geometry} material={materials.uranus_shader}  castShadow 
              receiveShadow />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <line geometry={CircleGeometry(450, 64, new THREE.Vector3(120, 0, 0))}>
        <lineBasicMaterial color={`#ADAAA8 `} transparent opacity={0.5} />
      </line>
    </group>
  )
}

useGLTF.preload('../../../public/uranus.glb')

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 -t venus.glb 
Author: Akshat (https://sketchfab.com/shooter24994)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/venus-d497ce25553447f3b7b679110c85cfa1
Title: Venus
*/
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'

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
  const { nodes, materials } = useGLTF('../../../public/venus.glb') as GLTFResult
  return (
    <group>
      <group {...props} dispose={null} position={[10, 0, 0]}>
      <group scale={0.01}>
        <mesh geometry={nodes.venus_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={350}  castShadow 
              receiveShadow/>
        <mesh geometry={nodes.atmosphere_Material_0.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} scale={600}  castShadow 
              receiveShadow />
      </group>

      <line geometry={CircleGeometry(120, 64, new THREE.Vector3(120, 0, 0))}>
        <lineBasicMaterial color='blue' transparent opacity={2} />
      </line>
    </group>
    </group>
  )
}

useGLTF.preload('../../../public/venus.glb')
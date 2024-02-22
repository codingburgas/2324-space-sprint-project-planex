/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 sun.glb -t 
Author: ayushcodemate (https://sketchfab.com/ayushcodemate)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sun-with-2k-textures-bac9e8f95040484bb86f1deb9bd6fe95
Title: Sun with 2K Textures
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_5: THREE.Mesh
  }
  materials: {
    material: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('../../../public/sun.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.material} position={[0, 0, 0.256]} scale={1} />
    </group>
  )
}

useGLTF.preload('../../../public/sun.glb')

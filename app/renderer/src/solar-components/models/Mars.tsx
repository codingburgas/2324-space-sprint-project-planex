/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 -t mars.glb 
Author: Mieke Roth (https://sketchfab.com/miekeroth)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mars-2b46962637ee4311af8f0d1d0709fbb2
Title: Mars
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mercury_1: THREE.Mesh
  }
  materials: {
    mercurius: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('../../../public/mars.glb') as GLTFResult
  return (
    <group {...props} dispose={null} position={[-20, 5, 0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Mercury_1.geometry} material={materials.mercurius} />
      </group>
    </group>
  )
}

useGLTF.preload('../../../public/mars.glb')

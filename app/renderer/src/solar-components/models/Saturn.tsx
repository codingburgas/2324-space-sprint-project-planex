import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'

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

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>
const groupScale = 0.07; 

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('../../../public/saturn.glb') as GLTFResult

  return (
    <group {...props} dispose={null}  position={[-240, 0, 0]} scale={[groupScale, groupScale, groupScale]}>
      <group rotation={[-Math.PI / 2, 0, 0]} userData={{ name: 'saturn.3ds' }}>
        <group position={[-0.484, -3.627, 0]} rotation={[-1.571, -1.386, 0.001]} scale={220.595} userData={{ name: 'Circle' }}>
          <group userData={{ name: 'TooBig2' }}>
            <mesh geometry={nodes.Object_5.geometry} material={materials.material} position={[0.017, 0, 0.001]} rotation={[1.571, -0.002, -1.386]} scale={0.005} userData={{ name: 'Object_5' }} />
          </group>
          <group userData={{ name: 'TooBig3' }}>
            <mesh geometry={nodes.Object_8.geometry} material={materials.material} position={[0.017, 0, 0.001]} rotation={[1.571, -0.002, -1.386]} scale={0.005} userData={{ name: 'Object_8' }} />
          </group>
          <group userData={{ name: 'TooBig4' }}>
            <mesh geometry={nodes.Object_11.geometry} material={materials.material} position={[0.017, 0, 0.001]} rotation={[1.571, -0.002, -1.386]} scale={0.005} userData={{ name: 'Object_11' }} />
          </group>
          <group userData={{ name: 'TooBig5' }}>
            <mesh geometry={nodes.Object_14.geometry} material={materials.material} position={[0.017, 0, 0.001]} rotation={[1.571, -0.002, -1.386]} scale={0.005} userData={{ name: 'Object_14' }} />
          </group>
          <mesh geometry={nodes.Object_16.geometry} material={materials.material} position={[0.017, 0, 0.001]} rotation={[1.571, -0.002, -1.386]} scale={0.005} userData={{ name: 'Object_16' }} />
        </group>
        <group scale={100} userData={{ name: 'Sphere' }}>
          <group userData={{ name: 'TooBig0' }}>
            <mesh geometry={nodes.Object_20.geometry} material={materials.material_0} scale={0.01} userData={{ name: 'Object_20' }} />
          </group>
          <group userData={{ name: 'TooBig1' }}>
            <mesh geometry={nodes.Object_23.geometry} material={materials.material_0} scale={0.01} userData={{ name: 'Object_23' }} />
          </group>
          <mesh geometry={nodes.Object_25.geometry} material={materials.material_0} scale={0.01} userData={{ name: 'Object_25' }} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../public/saturn.glb')

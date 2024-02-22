/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 saturn.glb -t 
Author: SebastianSosnowski (https://sketchfab.com/SebastianSosnowski)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/saturn-planet-9ab1eb3bb97f4e4a9305c0aae2d280a6
Title: Saturn (planet)
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['Saturn_Material_#50_0']: THREE.Mesh
    ['Saturn_Clouds_Material_#62_0']: THREE.Mesh
    ['Saturn_Rings_Material_#63_0']: THREE.Mesh
    ['Sphere_Mimas_Material_#64_0']: THREE.Mesh
    ['Sphere_Enceladus_Material_#64_0']: THREE.Mesh
    ['Sphere_Dione_Material_#64_0']: THREE.Mesh
    ['Sphere_Rhea_Material_#64_0']: THREE.Mesh
    ['Sphere_Tethys_Material_#64_0']: THREE.Mesh
  }
  materials: {
    Material_50: THREE.MeshStandardMaterial
    Material_62: THREE.MeshStandardMaterial
    Material_63: THREE.MeshStandardMaterial
    Material_64: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ActionName = 'Take 001'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}
type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('../../../public/saturn.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} position={[20,5,20]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.002}>
          <group name="56fb5d81d5a845599d5e60534f293915fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Saturn" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Saturn_Material_#50_0" geometry={nodes['Saturn_Material_#50_0'].geometry} material={materials.Material_50} />
                </group>
                <group name="Saturn_Clouds" rotation={[-Math.PI / 2, 0, -0.019]} scale={101}>
                  <mesh name="Saturn_Clouds_Material_#62_0" geometry={nodes['Saturn_Clouds_Material_#62_0'].geometry} material={materials.Material_62} />
                </group>
                <group name="Saturn_Rings" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Saturn_Rings_Material_#63_0" geometry={nodes['Saturn_Rings_Material_#63_0'].geometry} material={materials.Material_63} />
                </group>
                <group name="Sphere_Mimas" position={[-988.316, 0, -1127.884]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Sphere_Mimas_Material_#64_0" geometry={nodes['Sphere_Mimas_Material_#64_0'].geometry} material={materials.Material_64} />
                </group>
                <group name="Sphere_Enceladus" position={[1784.732, 0, 239.893]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Sphere_Enceladus_Material_#64_0" geometry={nodes['Sphere_Enceladus_Material_#64_0'].geometry} material={materials.Material_64} />
                </group>
                <group name="Sphere_Dione" position={[-3011.732, 0, -1085.334]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Sphere_Dione_Material_#64_0" geometry={nodes['Sphere_Dione_Material_#64_0'].geometry} material={materials.Material_64} />
                </group>
                <group name="Sphere_Rhea" position={[-2969.675, 0, -3375.375]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Sphere_Rhea_Material_#64_0" geometry={nodes['Sphere_Rhea_Material_#64_0'].geometry} material={materials.Material_64} />
                </group>
                <group name="Sphere_Tethys" position={[396.367, 0, 2165.972]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Sphere_Tethys_Material_#64_0" geometry={nodes['Sphere_Tethys_Material_#64_0'].geometry} material={materials.Material_64} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../public/saturn.glb')

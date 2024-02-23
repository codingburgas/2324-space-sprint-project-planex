/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 -t uranus.glb 
Author: Topson_Noble (https://sketchfab.com/Topson_Noble)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/planet-uranus-2b9de21987c6419ebe72df19e9c4163a
Title: Planet Uranus
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'

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

type ActionName = 'rings|7. saturn.001Action.002' | 'rings|ringsAction' | 'rings|saturn_ringAction' | 'rings|Shader NodetreeAction' | 'rings|spatial cameraAction' | 'rings|SphereAction' | 'rings|SphereAction.002' | 'rings|uranus|Take 001|BaseLayer' | 'rings|venusAction' | 'rings|venusAction.001' | 'rings|venusAction.002' | 'rings|venusAction.003' | 'rings|venusAction.004' | 'rings|venusAction.005' | 'rings|venusAction.008' | 'uranus|7. saturn.001Action.002' | 'uranus|ringsAction' | 'uranus|saturn_ringAction' | 'uranus|spatial cameraAction' | 'uranus|SphereAction' | 'uranus|SphereAction.002' | 'uranus|uranus|Take 001|BaseLayer' | 'uranus|venusAction' | 'uranus|venusAction.001' | 'uranus|venusAction.002' | 'uranus|venusAction.003' | 'uranus|venusAction.004' | 'uranus|venusAction.005' | 'uranus|venusAction.008'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}
type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('../../../public/uranus.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="f029815b00e641df84e4fa9461089ab2fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="uranus" position={[-1312.793, 0.013, 1294443.875]} rotation={[-0.818, 1.177, 0.869]} scale={1000}>
                  <group name="rings">
                    <mesh name="rings_lambert3_0" geometry={nodes.rings_lambert3_0.geometry} material={materials.lambert3} />
                    <mesh name="rings_lambert4_0" geometry={nodes.rings_lambert4_0.geometry} material={materials.lambert4} />
                    <mesh name="rings_lambert5_0" geometry={nodes.rings_lambert5_0.geometry} material={materials.lambert5} />
                    <mesh name="rings_lambert2_0" geometry={nodes.rings_lambert2_0.geometry} material={materials.lambert2} />
                  </group>
                  <mesh name="uranus_uranus_shader_0" geometry={nodes.uranus_uranus_shader_0.geometry} material={materials.uranus_shader} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../public/uranus.glb')

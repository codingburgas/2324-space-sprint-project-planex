/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 -t saturn.glb 
Author: NestaEric (https://sketchfab.com/Nestaeric)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/saturn-c09a1970148c43ad99db134a9d6d00b5
Title: Saturn
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['0']: THREE.Mesh
    saturn2_B_saturn2_B_0: THREE.Mesh
    saturn2_B_saturn2_A_0: THREE.Mesh
    saturn2_B_saturn2_A_0_1: THREE.Mesh
    saturn2_B_saturn2_A_0_2: THREE.Mesh
    saturn2_B_saturn2_A_0_3: THREE.Mesh
    saturn2_B_saturn2_A_0_4: THREE.Mesh
    saturn2_B_saturn2_A_0_5: THREE.Mesh
    saturn2_B_saturn2_A_0_6: THREE.Mesh
    saturn2_B_saturn2_A_0_7: THREE.Mesh
    saturn2_B_saturn2_A_0_8: THREE.Mesh
    saturn2_B_saturn2_A_0_9: THREE.Mesh
    saturn2_B_saturn2_A_0_10: THREE.Mesh
    saturn2_B_saturn2_A_0_11: THREE.Mesh
    saturn2_B_saturn2_A_0_12: THREE.Mesh
    saturn2_B_saturn2_A_0_13: THREE.Mesh
    saturn2_B_saturn2_A_0_14: THREE.Mesh
    saturn2_B_saturn2_A_0_15: THREE.Mesh
    saturn2_B_saturn2_A_0_16: THREE.Mesh
    saturn2_B_saturn2_A_0_17: THREE.Mesh
    saturn2_B_saturn2_A_0_18: THREE.Mesh
    saturn2_B_saturn2_A_0_19: THREE.Mesh
    saturn2_B_saturn2_A_0_20: THREE.Mesh
    saturn2_B_saturn2_A_0_21: THREE.Mesh
    saturn2_B_saturn2_A_0_22: THREE.Mesh
    saturn2_B_saturn2_A_0_23: THREE.Mesh
    saturn2_B_saturn2_A_0_24: THREE.Mesh
    saturn2_B_saturn2_A_0_25: THREE.Mesh
    saturn2_B_saturn2_A_0_26: THREE.Mesh
    saturn2_B_saturn2_A_0_27: THREE.Mesh
    saturn2_B_saturn2_A_0_28: THREE.Mesh
    saturn2_B_saturn2_A_0_29: THREE.Mesh
    saturn2_B_saturn2_A_0_30: THREE.Mesh
    saturn2_B_saturn2_A_0_31: THREE.Mesh
    saturn2_B_saturn2_A_0_32: THREE.Mesh
    saturn2_B_saturn2_A_0_33: THREE.Mesh
    saturn2_B_saturn2_A_0_34: THREE.Mesh
    saturn2_B_saturn2_A_0_35: THREE.Mesh
    saturn2_B_saturn2_A_0_36: THREE.Mesh
    saturn2_B_saturn2_A_0_37: THREE.Mesh
    saturn2_B_saturn2_A_0_38: THREE.Mesh
    saturn2_B_saturn2_A_0_39: THREE.Mesh
    saturn2_B_saturn2_A_0_40: THREE.Mesh
    saturn2_B_saturn2_A_0_41: THREE.Mesh
    saturn2_B_saturn2_A_0_42: THREE.Mesh
    saturn2_B_saturn2_A_0_43: THREE.Mesh
    saturn2_B_saturn2_A_0_44: THREE.Mesh
    saturn2_B_saturn2_A_0_45: THREE.Mesh
    saturn2_B_saturn2_A_0_46: THREE.Mesh
    saturn2_B_saturn2_A_0_47: THREE.Mesh
    saturn2_B_saturn2_A_0_48: THREE.Mesh
    saturn2_B_saturn2_A_0_49: THREE.Mesh
    saturn2_B_saturn2_A_0_50: THREE.Mesh
    saturn2_B_saturn2_A_0_51: THREE.Mesh
    saturn2_B_saturn2_A_0_52: THREE.Mesh
    saturn2_B_saturn2_A_0_53: THREE.Mesh
    saturn2_B_saturn2_A_0_54: THREE.Mesh
    saturn2_B_saturn2_A_0_55: THREE.Mesh
    saturn2_B_saturn2_A_0_56: THREE.Mesh
    saturn2_B_saturn2_A_0_57: THREE.Mesh
    saturn2_B_saturn2_A_0_58: THREE.Mesh
    saturn2_B_saturn2_A_0_59: THREE.Mesh
    saturn2_B_saturn2_A_0_60: THREE.Mesh
    saturn2_B_saturn2_A_0_61: THREE.Mesh
    saturn2_B_saturn2_A_0_62: THREE.Mesh
    saturn2_B_saturn2_A_0_63: THREE.Mesh
    saturn2_B_saturn2_A_0_64: THREE.Mesh
    saturn2_B_saturn2_A_0_65: THREE.Mesh
    saturn2_B_saturn2_A_0_66: THREE.Mesh
    saturn2_B_saturn2_A_0_67: THREE.Mesh
    saturn2_B_saturn2_A_0_68: THREE.Mesh
    saturn2_B_saturn2_A_0_69: THREE.Mesh
    saturn2_B_saturn2_A_0_70: THREE.Mesh
    saturn2_B_saturn2_A_0_71: THREE.Mesh
    saturn2_B_saturn2_A_0_72: THREE.Mesh
    saturn2_B_saturn2_A_0_73: THREE.Mesh
    saturn2_B_saturn2_A_0_74: THREE.Mesh
    Mimas_Mimas_0: THREE.Mesh
    Enceladus_Enceladus_0: THREE.Mesh
  }
  materials: {
    saturn1_A: THREE.MeshStandardMaterial
    saturn2_B: THREE.MeshStandardMaterial
    saturn2_A: THREE.MeshStandardMaterial
    Mimas: THREE.MeshStandardMaterial
    Enceladus: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('../../../public/saturn.glb') as GLTFResult
  return (
    <group {...props} dispose={null} position={[-80,5,0]}>
      <group scale={0.00001}>
        <group rotation={[-1.229, -0.324, 0.842]}>
          <group position={[-0.094, 0.047, 0]}>
            <mesh geometry={nodes.saturn2_B_saturn2_B_0.geometry} material={materials.saturn2_B} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_1.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_2.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_3.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_4.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_5.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_6.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_7.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_8.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_9.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_10.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_11.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_12.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_13.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_14.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_15.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_16.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_17.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_18.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_19.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_20.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_21.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_22.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_23.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_24.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_25.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_26.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_27.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_28.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_29.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_30.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_31.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_32.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_33.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_34.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_35.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_36.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_37.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_38.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_39.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_40.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_41.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_42.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_43.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_44.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_45.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_46.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_47.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_48.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_49.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_50.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_51.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_52.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_53.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_54.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_55.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_56.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_57.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_58.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_59.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_60.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_61.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_62.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_63.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_64.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_65.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_66.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_67.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_68.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_69.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_70.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_71.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_72.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_73.geometry} material={materials.saturn2_A} />
            <mesh geometry={nodes.saturn2_B_saturn2_A_0_74.geometry} material={materials.saturn2_A} />
          </group>
          <mesh geometry={nodes['0'].geometry} material={materials.saturn1_A} />
        </group>
        <group rotation={[-1.551, -0.437, -0.663]}>
          <mesh geometry={nodes.Mimas_Mimas_0.geometry} material={materials.Mimas} position={[-185000.016, -0.004, 0]} />
        </group>
        <group rotation={[-1.619, -0.156, 2.769]}>
          <mesh geometry={nodes.Enceladus_Enceladus_0.geometry} material={materials.Enceladus} position={[-237999.984, 0.004, 0.004]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../public/saturn.glb')

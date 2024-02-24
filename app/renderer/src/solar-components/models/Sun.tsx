import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import type { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Sun_LOD0__0: THREE.Mesh;
    Sun_LOD1__0: THREE.Mesh;
    Sun_LOD2__0: THREE.Mesh;
    Sun_LOD3__0: THREE.Mesh;
    Sun_LOD4__0: THREE.Mesh;
  };
  materials: {
    ['Scene_-_Root']: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('../../../public/sun.glb') as GLTFResult;

  const scaleValue = 0.8; // Set the desired scale factor

  return (
    <group {...props} dispose={null} position={[120, 3, 0]} scale={[scaleValue, scaleValue, scaleValue]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          {/* Apply scale to each mesh */}
          <mesh geometry={nodes.Sun_LOD0__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -22.361]} />
          <mesh geometry={nodes.Sun_LOD1__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -22.361]} />
          <mesh geometry={nodes.Sun_LOD2__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -22.361]} />
          <mesh geometry={nodes.Sun_LOD3__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -22.361]} />
          <mesh geometry={nodes.Sun_LOD4__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -22.361]} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('../../../public/sun.glb');

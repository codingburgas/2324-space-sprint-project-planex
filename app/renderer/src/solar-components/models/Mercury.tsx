import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import type { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Mercury_1: THREE.Mesh;
  };
  materials: {
    mercurius: THREE.MeshStandardMaterial;
  };
};

type ModelProps = JSX.IntrinsicElements['group'] & {
  position?: [number, number, number];
};

export default function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF('../../../public/mercury.glb') as GLTFResult;
  const textureLoader = new THREE.TextureLoader(); // Add texture loader

  // Assuming your texture is named 'texture.jpg' and located in the same folder as your GLB file
  const texture = textureLoader.load('../../../public/mercury-texture.jpg');

  // Apply the texture to the material
  materials.mercurius.map = texture;
  materials.mercurius.metalness = 2


  const { position = [0, 0, 2], ...groupProps } = props;

  return (
    <group {...groupProps} dispose={null} position={position}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Mercury_1.geometry} material={materials.mercurius} />
      </group>
    </group>
  );
}

useGLTF.preload('../../../public/mercury.glb');

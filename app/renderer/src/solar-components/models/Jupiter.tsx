/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 -t jupiter.glb 
Author: Shady Tex (https://sketchfab.com/ShadyTex4u)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/realistic-jupiter-993ba62a539e4c308e9e3137df454ed6
Title: Realistic Jupiter
*/

import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import type { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Sphere_Material_0: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

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


export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('../../../public/jupiter.glb') as GLTFResult;

  const scaleFactor = 0.028;

  return (
    <group>
      <group {...props} dispose={null} position={[-160, 5, 0]} scale={[scaleFactor, scaleFactor, scaleFactor]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            {/* Apply scale to the mesh */}
            <mesh
              geometry={nodes.Sphere_Material_0.geometry}
              material={materials.Material}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[scaleFactor * 101, scaleFactor * 101, scaleFactor * 101]}
            />
          </group>
        </group>
      </group>
      <line geometry={CircleGeometry(280, 64, new THREE.Vector3(120, 0, 0))}>
        <lineBasicMaterial color='blue' transparent opacity={2} />
      </line>
    </group>
  );
}

useGLTF.preload('../../../public/jupiter.glb');

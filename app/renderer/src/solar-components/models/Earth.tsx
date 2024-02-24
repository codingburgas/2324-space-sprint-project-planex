import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import type { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
  };
  materials: {
    heightmap_ref_group: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

function CircleGeometry(radius: number, segments: number, center: THREE.Vector3): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    const x = center.x + radius * Math.cos(theta);
    const y = center.y + radius * Math.sin(theta);
    vertices.push(x, y, center.z);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  return geometry;
}


export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('../../../public/earth.glb') as GLTFResult;

  const scaleFactor = 10;

  return (
    <group {...props} dispose={null} position={[-40, -5, 0]} scale={[scaleFactor, scaleFactor, scaleFactor]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {Object.keys(nodes).map((nodeName) => (
          <mesh key={nodeName} geometry={nodes[nodeName].geometry} material={materials.heightmap_ref_group} />
        ))}

        {/* Add the circle */}
        <line geometry={CircleGeometry(8.1, 64, new THREE.Vector3(8, 0, 0.5))}>
          <lineBasicMaterial color='red' transparent opacity={2} />
        </line>

      </group>
    </group>
  );
}

useGLTF.preload('../../../public/earth.glb');

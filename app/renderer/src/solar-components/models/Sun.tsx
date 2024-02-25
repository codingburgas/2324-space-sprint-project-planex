import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function Model(props) {
  const { nodes, materials } = useGLTF('../../../public/sun.glb');
  const { scene } = useThree();
  const lensFlareGroupRef = useRef();

  useEffect(() => {
    const lensFlareGroup = lensFlareGroupRef.current;

    const coreGeometry = new THREE.SphereGeometry(5, 32, 32);
    const coreMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.8 });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    lensFlareGroup.add(coreMesh);

    const haloGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const haloMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0.5 });
    const haloMesh = new THREE.Mesh(haloGeometry, haloMaterial);
    haloMesh.rotation.x = Math.PI / 2; // Orient the halo
    lensFlareGroup.add(haloMesh);
    lensFlareGroup.position.set(120, 3, 0);
    scene.add(lensFlareGroup);

    return () => {
      lensFlareGroup.remove(coreMesh);
      lensFlareGroup.remove(haloMesh);
      scene.remove(lensFlareGroup);
    };
  }, [scene]);

  const scaleValue = 0.8;

  return (
      <group {...props} dispose={null} position={[120, 3, 0]} scale={[scaleValue, scaleValue, scaleValue]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh geometry={nodes.Sun_LOD0__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -22.361]}  />
          <mesh geometry={nodes.Sun_LOD1__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -22.361]} />
          <mesh geometry={nodes.Sun_LOD2__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -22.361]} />
          <mesh geometry={nodes.Sun_LOD3__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -22.361]} />
          <mesh geometry={nodes.Sun_LOD4__0.geometry} material={materials['Scene_-_Root']} position={[0, 0, -22.361]} />
        </group>
      </group>
      <group ref={lensFlareGroupRef} position={[0, 0, 0]}>
      </group>
      <directionalLight
        position={[0, 10, 0]}
        intensity={1.0}
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-near={0.5}
        shadow-camera-far={500}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      />
    </group>
  );
}

useGLTF.preload('../../../public/sun.glb');

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree, extend } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import * as THREE from "three";

extend({ EffectComposer, Bloom, UnrealBloomPass });

export default function Model(props) {
  const { nodes, materials } = useGLTF("../../../public/sun.glb");
  const sunRef = useRef();
  const meshRef = useRef();
  const scaleValue = 0.8;

  useFrame(() => {
    sunRef.current.rotation.y += 0.004;
  });

  const bloomParams = {
    strength: 10,
    radius: 10,
    threshold: 0.3,
  };

  return (
    <group
      ref={sunRef}
      {...props}
      dispose={null}
      position={[120, 3, 0]}
      scale={[scaleValue, scaleValue, scaleValue]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            geometry={nodes.Sun_LOD0__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 0, -22.361]}
            ref={meshRef}
          />
          <mesh
            geometry={nodes.Sun_LOD1__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 0, -22.361]}
            ref={meshRef}
          />
          <mesh
            geometry={nodes.Sun_LOD2__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 0, -22.361]}
            ref={meshRef}
          />
          <mesh
            geometry={nodes.Sun_LOD3__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 0, -22.361]}
            ref={meshRef}
          />
          <mesh
            geometry={nodes.Sun_LOD4__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[0, 0, -22.361]}
            ref={meshRef}
          />
        </group>
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
      <EffectComposer>
        <Bloom
          luminanceThreshold={bloomParams.threshold}
          luminanceSmoothing={0.15}
          height={50}
        />
      </EffectComposer>
    </group>
  );
}

useGLTF.preload("../../../public/sun.glb");

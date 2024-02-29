import { useCallback, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';
import CameraControls from 'camera-controls';

CameraControls.install({ THREE });

const CustomCameraControls = () => {
  const { camera, gl, scene } = useThree();
  const controlsRef = useRef();
  const [target, setTarget] = useState(new THREE.Vector3());

  useEffect(() => {
    const controls = new CameraControls(camera, gl.domElement);
    controlsRef.current = controls;
    return () => controls.dispose();
  }, [camera, gl.domElement]);

  const onClick = useCallback((event) => {
    const mouse = new THREE.Vector2(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
      const [first] = intersects;
      setTarget(first.point);
    }
  }, [camera, scene.children]);

  useEffect(() => {
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, [onClick]);

  useFrame((state, delta) => {
    if (controlsRef.current) {
      controlsRef.current.setTarget(target.x, target.y, target.z);
      controlsRef.current.update(delta);
    }
  });

  return null;
};




  export default CustomCameraControls;
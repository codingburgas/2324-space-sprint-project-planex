import * as THREE from 'three';
import CameraControls from 'camera-controls';
import { useEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

CameraControls.install({ THREE: THREE });

const CustomCameraControls = () => {
  const [topPov, setTopPov] = useState(true);
  const {
    camera,
    gl, 
  } = useThree();

  const controlsRef = useRef();
  let pos = new THREE.Vector3;
  const updatePosition = (controls : CameraControls) => {
  controls.getPosition(pos, true)
}

  useEffect(() => {
    if (!controlsRef.current) {
    const controls : CameraControls = new CameraControls(camera, gl.domElement);

    controls.setPosition(0, 100, 20);
    controls.mouseButtons.right = CameraControls.ACTION.TRUCK;
    controls.mouseButtons.left = CameraControls.ACTION.TRUCK;

    controls.minDistance = 20;
    controls.maxDistance = 600;
    controls.dollyToCursor = true;
    controls.smoothTime = 0.4;

    controls.verticalDragToForward = true;
    controls.draggingSmoothTime = 0.1;

      controlsRef.current = controls;
    }

  }, [camera, gl.domElement, pos]);

  useFrame((state, delta) => controlsRef.current?.update(delta));

  return null;
};

export default CustomCameraControls;
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { assestsCloudinaryLinks } from "../constants";

const Sky = ({ isRotating }) => {
  const sky = useGLTF(assestsCloudinaryLinks.sky);
  const skyRef = useRef();

  useFrame((_, delta) => {
    // if (isRotating) {
    //   skyRef.current.rotation.y += 0.15 * delta;
    // }
    skyRef.current.rotation.y += 0.05 * delta;
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;

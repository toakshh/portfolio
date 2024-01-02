import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { assestsCloudinaryLinks } from "../constants";

const Bird = () => {
  const { scene, animations } = useGLTF(assestsCloudinaryLinks.bird);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    const birdPosition = birdRef.current.position.x;

    if (birdPosition > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
      birdRef.current.position.x = camera.position.x + 10;
    } else if (birdPosition < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
      birdRef.current.position.x = camera.position.x - 10;
    }

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh position={[-5, 5, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;

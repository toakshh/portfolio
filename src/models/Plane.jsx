import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { assestsCloudinaryLinks } from "../constants";

const Plane = ({ ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(assestsCloudinaryLinks.plane);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;

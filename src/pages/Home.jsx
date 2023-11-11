import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
{
  /* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
  Popup
</div> */
}
const Home = () => {
  // Scales 3d model for diffrent screensize devices
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -13, -42];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* Show loader while 3d model is loading. NOTE: 3d models can't understand html elements. Use Drei */}
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <ambientLight intensity={0.5} />
          {/* <pointLight  /> */}
          {/* <spotLight  /> */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotatioe={islandRotation}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;

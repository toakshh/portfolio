import { Suspense, useEffect, useState, useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false); //Tracks if model is still or rotating
  const [currentStage, setCurrentStage] = useState(1); //Sets Geo points locator in island
  const [isPlayingMusic, setIsPlayingMusic] = useState(true); //Tracks music button mute status
  // Loading audio
  const audioRef = useRef(
    new Audio(
      "https://res.cloudinary.com/dnhe1k7hk/video/upload/f_auto:video,q_auto/v1/portfolio%20assets/assets/y5iqbjptzgdqiwkvccqf"
    )
  );
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  // Scales 3d model for diffrent screensize devices
  const adjustIslandForScreenSize = useMemo(() => {
    let screenScale = null;
    let screenPosition = [0, -6, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.7, 0.7, 0.7];
    } else {
      screenScale = [1.1, 1.1, 1.1];
    }
    return [screenScale, screenPosition, rotation];
  }, [window.innerWidth]);

  const adjustPlaneForScreenSize = useMemo(() => {
    let screenScale;
    let screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [2, 2, 2];
      screenPosition = [0, -3.5, 0];
    } else {
      screenScale = [4, 4, 4];
      screenPosition = [0, -6, -4];
    }
    return [screenScale, screenPosition];
  }, [window.innerWidth]);

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize;
  const [planeScale, planePosition] = adjustPlaneForScreenSize;

  return (
    <section className="w-full h-screen relative">
      {/* Blue banner */}
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      {/* 3d scene */}
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000, position: [0, -0.5, 10] }}
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
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0.4]}
          />
        </Suspense>
      </Canvas>
      {/* Music control button */}
      <div className="fixed bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          className="w-10 h-10 cursor-pointer object-contain"
          alt="sound button"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;

import { Html } from "@react-three/drei";
const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-4 border-opacity-20 border-blue-400 border-t-purple-900 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};

export default Loader;

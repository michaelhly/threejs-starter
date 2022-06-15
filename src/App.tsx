import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "./component/Box";
import { MainLights } from "./component/MainLights";
import { useWindowDimensions } from "./hooks/useWindowDimensions";
import Flamingo from "./component/Flamingo";
import Parrot from "./component/Parrot";
import Stork from "./component/Stork";

function App() {
  const { width, height } = useWindowDimensions();

  return (
    <Canvas
      style={{ background: "skyblue", height: "100vh" }}
      camera={{
        fov: 35,
        aspect: width / height,
        near: 0.1,
        far: 100,
        position: [-1.5, 1.5, 6],
      }}
    >
      <MainLights />
      <Flamingo position={[7.5, 0, -10]} />
      <Parrot position={[0, 0, 2.5]} />
      <Stork position={[0, -2.5, -10]} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;

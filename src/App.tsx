import { Canvas } from "@react-three/fiber";
import { Box } from "./component/Box";
import { MainLights } from "./component/MainLights";
import { useWindowDimensions } from "./hooks/useWindowDimensions";

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
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}

export default App;

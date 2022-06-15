import { Canvas } from "@react-three/fiber";
import { Box } from "./component/Box";
import { MainLights } from "./component/MainLights";

function App() {
  return (
    <Canvas>
      <MainLights />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}

export default App;

import { Canvas } from "@react-three/fiber";
import { Box } from "./component/Box";
import Flamingo from "./component/Flamingo";
import { MainLights } from "./component/MainLights";
import Parrot from "./component/Parrot";
import Stork from "./component/Stork";

function App() {
  return (
    <Canvas
      camera={{
        fov: 35,
        aspect: 1,
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

import { Color } from "three";

export const MainLights: React.FC = () => {
  const white = new Color("white");
  return (
    <>
      <hemisphereLight
        color={white}
        groundColor={new Color("darkslategrey")}
        intensity={5}
      />
      <directionalLight color={white} intensity={2} position={[10, 10, 10]} />
    </>
  );
};

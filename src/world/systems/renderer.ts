import { WebGLRenderer } from "three";

export const createRenderer = () => {
    const renderer = new WebGLRenderer();
  
    renderer.physicallyCorrectLights = true;
  
    return renderer;
}
  
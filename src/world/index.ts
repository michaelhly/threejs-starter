import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createLights } from "./components/lights";
import { createScene } from "./components/scene";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";

export class World {
    private _camera: PerspectiveCamera
    private _scene: Scene;
    private _renderer: WebGLRenderer;

    constructor(container: HTMLElement) {
      this._camera = createCamera();
      this._scene = createScene();
      this._renderer = createRenderer();
      container.append(this._renderer.domElement);
  
      const cube = createCube();
      const light = createLights();
  
      this._scene.add(cube, light);
  
      const resizer = new Resizer(container, this._camera, this._renderer);
    }
  
    render() {
      // draw a single frame
      this._renderer.render(this._scene, this._camera);
    }
  }
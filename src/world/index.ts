import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createLights } from "./components/lights";
import { createScene } from "./components/scene";
import { Loop } from "./systems/Loop";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/Resizer";

export class World {
    private _camera: PerspectiveCamera
    private _scene: Scene;
    private _renderer: WebGLRenderer;
    private _loop: Loop;

    constructor(container: HTMLElement) {
      this._camera = createCamera();
      this._scene = createScene();
      this._renderer = createRenderer();
      this._loop = new Loop(this._camera, this._scene, this._renderer)
      container.append(this._renderer.domElement);
  
      const cube = createCube();
      const light = createLights();

      this._loop.updateables.push(cube);
      
      cube.addToScene(this._scene)
      this._scene.add(light);
  
      new Resizer(container, this._camera, this._renderer);
    }
  
    render() {
      // draw a single frame
      this._renderer.render(this._scene, this._camera);
    }

    start() {
      this._loop.start()
    }

    stop() {
      this._loop.stop()
    }
  }
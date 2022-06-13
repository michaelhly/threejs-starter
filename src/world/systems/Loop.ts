import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from "three";

interface Updateable {
    tick: (delta: number) => void
}

export class Loop {
    private _camera: PerspectiveCamera 
    private _scene: Scene;
    private _renderer: WebGLRenderer;
    private _clock: Clock;
    public updateables: Updateable[] = [];


    constructor(camera: PerspectiveCamera, scene: Scene, renderer: WebGLRenderer) {
        this._clock = new Clock();
        this._camera = camera;
        this._scene = scene;
        this._renderer = renderer;
    }

    start() {
        this._renderer.setAnimationLoop(() => {
            // tell every animated object to tick forward one frame
            this._tick()
            // render a frame
            this._renderer.render(this._scene, this._camera)
        })
    }

    stop() {
        this._renderer.setAnimationLoop(null)
    }

    private _tick() {
        const delta = this._clock.getDelta();
        for (const obj of this.updateables) {
            obj.tick(delta)
        }
    }
}
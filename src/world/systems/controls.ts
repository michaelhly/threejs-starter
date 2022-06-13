import { PerspectiveCamera } from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export class OrbitControlsWithTick {
    private _internal: OrbitControls;

    constructor(controls: OrbitControls) {
        this._internal = controls;
    }

    tick() {
        this._internal.update();
    }

    addEventListener = (event: string, listener: (event: any) => void) => {
        this._internal.addEventListener(event, listener)
    }
}


export const createControls = (camera: PerspectiveCamera, canvas: HTMLCanvasElement) => {
    const controls = new OrbitControls(camera, canvas);

    // With damping enabled, the controls will slow to a stop over
    // several frames which gives them a feeling of weight.
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;
    controls.minDistance = 5;
    controls.maxDistance = 20;

    return new OrbitControlsWithTick(controls); 
}
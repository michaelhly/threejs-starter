import { Group } from "three";
import { WHEEL_SPEED } from "./constants";
import { createMeshes, TrainMeshes } from "./meshes";

export class Train extends Group {
    private __meshes: TrainMeshes;

    constructor() {
        super()
        this.__meshes = createMeshes();
        this.add(...Object.values(this.__meshes))
    }

    tick(delta: number) {
        this.__meshes.bigWheel.rotation.y += WHEEL_SPEED * delta;
        this.__meshes.smallWheelRear.rotation.y += WHEEL_SPEED * delta;
        this.__meshes.smallWheelCenter.rotation.y += WHEEL_SPEED * delta;
        this.__meshes.smallWheelFront.rotation.y += WHEEL_SPEED * delta;
    }
}
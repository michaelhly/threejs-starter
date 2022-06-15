import { Group } from "three";
import { createMeshes, TrainMeshes } from "./meshes";

export class Train extends Group {
    private __meshes: TrainMeshes;

    constructor() {
        super()
        this.__meshes = createMeshes();
        this.add(...Object.values(this.__meshes))
    }
}
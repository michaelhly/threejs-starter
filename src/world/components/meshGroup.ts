import { Group, Mesh, MeshStandardMaterial, Scene, SphereBufferGeometry } from "three";

export class MeshGroupWithTick {
    private __internal: Group;

    constructor(group: Group) {
        this.__internal = group;
    }

    tick() {}

    addToScene(scene: Scene) {
        scene.add(this.__internal)
    }
}

export const createMeshGroup = () => {
    const group = new Group();
    const geometry = new SphereBufferGeometry(0.25, 16, 16);
    const material = new MeshStandardMaterial({
        color: 'indigo',
    });
    const protoSphere = new Mesh(geometry, material);

    // add the sphere to the group
    group.add(protoSphere);

    return new MeshGroupWithTick(group)
}
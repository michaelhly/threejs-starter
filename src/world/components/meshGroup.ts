import { Group, Mesh, MeshStandardMaterial, Scene, SphereBufferGeometry } from "three";
import { RADIANS_PER_SECOND } from "../../constants";

export class MeshGroupWithTick {
    private __internal: Group;

    constructor(group: Group) {
        this.__internal = group;
    }

    tick(delta: number) {
        this.__internal.rotation.z -= delta * RADIANS_PER_SECOND;
    }

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
    // create twenty clones of the protoSphere
    const clones = new Array(20).fill(null).map((_, i) => {
        const clone = protoSphere.clone()
        const POSITION_EPSILON = 0.05;
        clone.position.x = Math.cos(2 * Math.PI * i * POSITION_EPSILON)
        clone.position.y = Math.sin(2 * Math.PI * i * POSITION_EPSILON)
        clone.position.z = -i * POSITION_EPSILON * 5;

        clone.scale.multiplyScalar(0.01 + i * POSITION_EPSILON);
        return clone
    })

    // add the sphere to the group
    group.add(protoSphere, ...clones);
    // every sphere inside the group will be scaled
    group.scale.multiplyScalar(2);

    return new MeshGroupWithTick(group)
}
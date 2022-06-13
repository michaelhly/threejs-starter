import { BoxBufferGeometry, Mesh, MeshStandardMaterial, Scene } from "three";

export class CubeWithTick {
    private _internal: Mesh<BoxBufferGeometry, MeshStandardMaterial>;

    constructor(cube: Mesh<BoxBufferGeometry, MeshStandardMaterial>) {
        this._internal = cube;
    }

    addToScene(scene: Scene) {
        scene.add(this._internal)
    }

    tick() {
        // increase the cube's rotation each frame
        this._internal.rotation.z += 0.01;
        this._internal.rotation.x += 0.01;
        this._internal.rotation.y += 0.01;
    }
}

export const createCube = () => {
    const geometry = new BoxBufferGeometry(2, 2, 2);

    const material = new MeshStandardMaterial({ color: 'purple' });
  
    const cube = new Mesh(geometry, material);
  
    cube.position.x = -0.5;
    cube.position.y = -0.1;
    cube.position.z = 1;
  
    // equivalent to:
    // cube.position.set(-0.5, -0.1, 1);
  
    cube.scale.x = 1.25;
    cube.scale.y = 0.25;
    cube.scale.z = 0.5;
  
    // equivalent to:
    // cube.scale.set(1.25, 0.25, 0.5);

    return new CubeWithTick(cube);
}
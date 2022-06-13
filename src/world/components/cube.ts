import { BoxBufferGeometry, Mesh, MeshStandardMaterial, Scene, TextureLoader } from "three";

import { RADIANS_PER_SECOND } from "../../constants";

export class CubeWithTick {
    private _internal: Mesh<BoxBufferGeometry, MeshStandardMaterial>;

    constructor(cube: Mesh<BoxBufferGeometry, MeshStandardMaterial>) {
        this._internal = cube;
    }

    addToScene(scene: Scene) {
        scene.add(this._internal)
    }

    tick(delta: number) {
        // increase the cube's rotation each frame
        this._internal.rotation.z += RADIANS_PER_SECOND * delta;
        this._internal.rotation.x += RADIANS_PER_SECOND * delta;
        this._internal.rotation.y += RADIANS_PER_SECOND * delta;
    }
}

export const createCube = () => {
    const geometry = new BoxBufferGeometry(2, 2, 2);
    const cube = new Mesh(geometry, createMaterial());
  
    cube.position.x = -0.5;
    cube.position.y = -0.1;
    cube.position.z = 1;
  
    // equivalent to:
    // cube.position.set(-0.5, -0.1, 1);
  
    return new CubeWithTick(cube);
}

const createMaterial = () => {
    // create a texture loader.
    const textureLoader = new TextureLoader();
    // load a texture
    const texture = textureLoader.load('/assets/textures/uv-test-bw.png');
    // create a "standard" material using
    // the texture we just loaded as a color map
    return new MeshStandardMaterial({ map: texture });
}
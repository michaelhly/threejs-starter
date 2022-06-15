import { BoxBufferGeometry, CylinderGeometry, Mesh, MeshStandardMaterial } from "three"
import { createGeometries } from "./geometries"
import { createBodyMaterial, createDetailMaterial } from "./materials"

export interface TrainMeshes {
    nose: Mesh<CylinderGeometry, MeshStandardMaterial>;
    cabin: Mesh<BoxBufferGeometry, MeshStandardMaterial>;
    chimney: Mesh<CylinderGeometry, MeshStandardMaterial>;
    smallWheelRear: Mesh<CylinderGeometry, MeshStandardMaterial>;
    smallWheelCenter: Mesh<CylinderGeometry, MeshStandardMaterial>;
    smallWheelFront: Mesh<CylinderGeometry, MeshStandardMaterial>;
    bigWheel: Mesh<CylinderGeometry, MeshStandardMaterial>;
}

export const createMeshes = (): TrainMeshes => {
    const geometries  = createGeometries()
    const bodyMaterial = createBodyMaterial();

    const cabin = new Mesh(geometries.cabin, bodyMaterial);
    cabin.position.set(1.5, 1.4, 0);
    const nose = new Mesh(geometries.nose, bodyMaterial);
    nose.position.set(-1, 1, 0);
    nose.rotation.z = Math.PI / 2;

    const detailMaterial = createDetailMaterial();
    const chimney = new Mesh(geometries.chimney, detailMaterial);
    chimney.position.set(-2, 1.9, 0);
    const smallWheelRear = new Mesh(geometries.wheel, detailMaterial);
    smallWheelRear.position.y = 0.5;
    smallWheelRear.rotation.x = Math.PI / 2;
  
    const smallWheelCenter = smallWheelRear.clone();
    smallWheelCenter.position.x = -1;
  
    const smallWheelFront = smallWheelRear.clone();
    smallWheelFront.position.x = -2;
  
    const bigWheel = smallWheelRear.clone();
    bigWheel.position.set(1.5, 0.9, 0);
    bigWheel.scale.set(2, 1.25, 2);

    return {
        nose,
        cabin,
        chimney,
        smallWheelRear,
        smallWheelCenter,
        smallWheelFront,
        bigWheel,
    };
}
import { BoxBufferGeometry, CylinderBufferGeometry } from "three";

export const createGeometries = () => {
    return {
        cabin: new BoxBufferGeometry(2, 2.25, 1.5),
        nose: new CylinderBufferGeometry(0.75, 0.75, 3, 12),
        wheel: new CylinderBufferGeometry(0.4, 0.4, 1.75, 16),
        chimney: new CylinderBufferGeometry(0.3, 0.1, 0.5),
      };

}
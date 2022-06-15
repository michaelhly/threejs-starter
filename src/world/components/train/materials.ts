import { MeshStandardMaterial } from "three"

export const createBodyMaterial = () => {
    const body = new MeshStandardMaterial({
        color: 'firebrick',
        flatShading: true,
    })
    return body;
}

export const createDetailMaterial = () => {
    const detail = new MeshStandardMaterial({
        color: 'darkslategray',
        flatShading: true
    })
    return detail;
}


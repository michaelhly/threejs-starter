import { AxesHelper, GridHelper } from 'three';

export const createAxesHelper = () => {
  const helper = new AxesHelper(3);
  helper.position.set(-3.5, 0, -3.5);
  return helper;
}

export const createGridHelper = () => {
  const helper = new GridHelper(6);
  return helper;
}

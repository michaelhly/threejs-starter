/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_0: THREE.Mesh;
  };
  materials: {
    Material_0_COLOR_0: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "KeyAction";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

export default function Stork({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>() as React.MutableRefObject<THREE.Group>;
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/Stork.glb"
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Stork"
          geometry={nodes.Object_0.geometry}
          material={materials.Material_0_COLOR_0}
          morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/Stork.glb");
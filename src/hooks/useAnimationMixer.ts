import { useEffect, useState } from "react";
import { AnimationClip, AnimationMixer, AnimationObjectGroup, Object3D } from "three";

export const useAnimationMixer = (root: Object3D | AnimationObjectGroup, clips: AnimationClip[] = []) => {
    const [mixer] = useState(new AnimationMixer(root));

    useEffect(() => {
        clips.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
    }, [clips]);
    
    return mixer;
}
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

function Backdrop(){
    const shadows = useRef();

    return(
        <AccumulativeShadows
            ref={shadows}
            temporal
            frames={60}
            alphaTest={0.85}
            scale={10}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0, -0.14]}
        >
            <RandomizedLight
                amount={1}
                radius={9}
                intensity={1}
                ambient={0.25}
                position={[5, 5, -10]}
            />

            <RandomizedLight
                amount={1}
                radius={1}
                intensity={1}
                ambient={0.55}
                position={[-2, -20, -10]}
            />

            <RandomizedLight
                amount={1}
                radius={9}
                intensity={1}
                ambient={0.55}
                position={[10, -5, 5]}
            />
            <RandomizedLight
                amount={1}
                radius={1}
                intensity={0.5}
                // ambient={0.55}
                position={[1, 10, 5]}
            />

            <RandomizedLight
                amount={1}
                radius={1}
                intensity={0.5}
                ambient={0.55}
                position={[-2, -20, -10]}
            />
        </AccumulativeShadows>
    )
}

export default Backdrop;
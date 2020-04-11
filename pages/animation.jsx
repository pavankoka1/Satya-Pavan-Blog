/* eslint-disable react/destructuring-assignment */
import React from "react";
import { useSpring } from "react-spring";
import { Wrapper, Picture } from "./animation";
import { Loader } from "@Components/Shared";

const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1,
];
const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Animation = () => {
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 },
    }));
    return (
        <Wrapper>
            <Picture
                onMouseMove={({ clientX: x, clientY: y }) =>
                    set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            />
            {/* <Loader /> */}
        </Wrapper>
    );
};

export default Animation;

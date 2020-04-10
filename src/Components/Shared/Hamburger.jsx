/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
import React from "react";
import { useSpring, animated } from "react-spring";

const Hamburger = props => {
    const { o } = useSpring({
        to: async next => {
            await next({ o: 1 }), await next({ o: 0 });
        },
        from: { o: 0 },
    });

    return (
        <svg width="20" height="12" {...props}>
            <animated.rect
                width="20"
                height="2.2"
                y={o.interpolate(y => y * 10)}
            />
            <rect y="5" width="20" height="2" />
            <animated.rect
                width="20"
                height="1.8"
                y={o.interpolate(y => (1 - y) * 10)}
            />
        </svg>
    );
};

export { Hamburger };

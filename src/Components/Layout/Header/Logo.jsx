/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Wrapper, InnerWrapper } from "./Logo";

const Logo = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <img src="/static/images/hogwarts.png" />
            </InnerWrapper>
        </Wrapper>
    );
};

export default Logo;

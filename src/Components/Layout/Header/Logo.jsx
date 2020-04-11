/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Wrapper, InnerWrapper } from "./Logo.js";

const Logo = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                {/* <img src="/static/images/hogwarts.png" /> */}
                <img src="https://demos.alithemes.com/liberte/default/wp-content/themes/liberte/assets/images/logo.png" />
            </InnerWrapper>
        </Wrapper>
    );
};

export default Logo;

import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Hamburger, Search } from "@Components/Shared";
import {
    Wrapper,
    InnerWrapper,
    HamburgerIcon,
    Today,
    Left,
    Right,
    // eslint-disable-next-line import/named
    SearchText,
} from "./TopBar";

const TopBar = () => {
    const today = new Date().toDateString();
    return (
        <Wrapper>
            <InnerWrapper>
                <Left>
                    <HamburgerIcon>
                        <Hamburger fill="#7b7b7b" />
                    </HamburgerIcon>
                    <p>Today is</p>
                    <Today>
                        {`${today.substr(8, 2)} ${today.substr(
                            4,
                            3
                        )}, ${today.substr(11, 4)}`}
                    </Today>
                </Left>
                <Right>
                    <Search fill="#ababab" width={12} height={12} />
                    <SearchText>search</SearchText>
                </Right>
            </InnerWrapper>
        </Wrapper>
    );
};

export default TopBar;

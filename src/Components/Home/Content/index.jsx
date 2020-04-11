/* eslint-disable import/extensions */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-self-import */
import React from "react";
import PropTypes from "prop-types";
import { Wrapper, InnerWrapper, Left, Right } from "./index.sc.js";
import RecentPosts from "./RecentPosts";
import Popular from "./Popular";

const Content = ({ popular, recent }) => {
    return (
        <Wrapper>
            <InnerWrapper>
                <Left>
                    <RecentPosts posts={recent} />
                </Left>
                <Right>
                    <Popular posts={popular} />
                </Right>
            </InnerWrapper>
        </Wrapper>
    );
};

Content.propTypes = {
    popular: PropTypes.array.isRequired,
    recent: PropTypes.array.isRequired,
};

export default Content;

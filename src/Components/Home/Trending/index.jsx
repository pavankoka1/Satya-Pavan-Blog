/* eslint-disable import/extensions */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-self-import */
import React from "react";
import PropTypes from "prop-types";
import Card from "./Card.jsx";
import { Wrapper, InnerWrapper } from "./index.sc";

const Trending = ({ posts }) => {
    return (
        <Wrapper>
            <InnerWrapper>
                {posts.map(post => (
                    <Card post={post} id={post.id} />
                ))}
            </InnerWrapper>
        </Wrapper>
    );
};

Trending.propTypes = {
    posts: PropTypes.array.isRequired,
};

export default Trending;

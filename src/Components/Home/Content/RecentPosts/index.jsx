/* eslint-disable import/extensions */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-self-import */
import React from "react";
import PropTypes from "prop-types";
import Card from "./Card.jsx";
import { Wrapper, Header, HeaderText, Divider, Cards } from "./index.sc";

const RecentPosts = ({ posts }) => (
    <Wrapper>
        <Header>
            <HeaderText>Recent posts</HeaderText>
            <Divider />
        </Header>
        <Cards>
            {posts.map(post => (
                <Card id={post.id} post={post} />
            ))}
        </Cards>
    </Wrapper>
);

RecentPosts.propTypes = {
    posts: PropTypes.array.isRequired,
};

export default RecentPosts;

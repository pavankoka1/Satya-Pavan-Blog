/* eslint-disable import/extensions */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-self-import */
import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import { Wrapper, Header, HeaderText, Divider, Cards } from "./index.sc";

const Popular = ({ posts }) => {
    return (
        <Wrapper>
            <Header>
                <HeaderText>Popular</HeaderText>
                <Divider />
            </Header>
            <Cards>
                {posts.map(post => (
                    <Card id={post.id} post={post} />
                ))}
            </Cards>
        </Wrapper>
    );
};

Popular.propTypes = {
    posts: PropTypes.array.isRequired,
};

export default Popular;

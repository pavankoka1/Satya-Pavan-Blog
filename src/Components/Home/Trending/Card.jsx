/* eslint-disable import/extensions */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-self-import */
import React from "react";
import PropTypes from "prop-types";
import {
    Wrapper,
    Author,
    AuthorName,
    Description,
    Circle,
    Date,
} from "./Card.sc";

const Card = ({ post }) => {
    return (
        <Wrapper>
            <img src={post.url} alt="loading ..." />
            <Description>{post.description}</Description>
            <Author>
                <img src={post.author_url} alt="loading ..." />
                <AuthorName>{post.author}</AuthorName>
                <Circle />
                <Date>{post.date}</Date>
            </Author>
        </Wrapper>
    );
};

Card.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Card;

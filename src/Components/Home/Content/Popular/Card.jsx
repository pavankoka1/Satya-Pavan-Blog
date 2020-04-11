/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-self-import */
import React from "react";
import PropTypes from "prop-types";
import { Wrapper, ImageCard, Right, Text, Details, Circle } from "./Card.sc";

const Card = ({ post }) => {
    return (
        <Wrapper>
            <ImageCard src={post.uri} />
            <Right>
                <Details>
                    <Circle className="blue" />
                    <Text className="author">{post.date}</Text>
                </Details>
                <Text className="title">{post.title}</Text>
            </Right>
        </Wrapper>
    );
};

Card.propTypes = {
    post: PropTypes.object.isRequired,
};

export default Card;

import styled from "styled-components";

export const Wrapper = styled.div({
    cursor: "pointer",
    padding: "0",
    marginBottom: "2.18rem",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
});

export const Text = styled.p`
    font-family: Poppins;
    font-size: 12px;

    &.title {
        font-size: 28.8px;
        color: #101d35;
        font-weight: 600;
        line-height: 1.2em;
        margin-bottom: 14px;
        transform: color 0.2s ease-in;

        &:hover {
            color: #e1677b;
        }
    }

    &.author {
        font-size: 11px;
        color: #6e6e6e;
        line-height: 2em;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        font-weight: 500;
        margin-right: 20px;
    }

    &.description {
        font-size: 0.9rem;
        font-size: 14.4px;
        line-height: 1.6rem;
        margin-bottom: 1.6rem;
        font-family: Lora;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        color: #454e62;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const Circle = styled.p`
    border-radius: 50%;
    width: 9.38px;
    height: 9.78px;
    margin-right: 5px;
    border: 1.5px solid;

    &.red {
        border-color: rgba(220, 53, 69, 0.7);
    }

    &.blue {
        border-color: rgba(0, 123, 255, 0.7);
    }
`;

export const ImageCard = styled.img`
    margin-right: 15px;
    width: calc(100% / (12 / 5));
    border: 8px solid #fff;

    &.author {
        height: 25px;
        width: 25px;
        border-radius: 50%;
        border: 0;
    }
`;

export const Right = styled.div`
    padding: 0 0 0 15px;
    width: "calc(100% / (12/7))";
    display: "flex";
    flex-direction: "column";

    &Text {
        border: 1px solid red;
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 20px;
`;

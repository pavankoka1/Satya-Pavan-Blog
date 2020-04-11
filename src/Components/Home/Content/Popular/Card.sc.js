import styled from "styled-components";

export const Wrapper = styled.div({
    backgroundColor: "white",
    cursor: "pointer",
    padding: "15px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
});

export const ImageCard = styled.div`
    width: calc(100% / (12 / 4)) !important;
    border: 6px solid #fff;
    border-radius: 50%;
    padding-top: calc(100% / (12 / 4));

    background-image: url(${props => props.src});
    background-size: cover;
`;

export const Right = styled.div`
    padding: 0 0 0 15px;
    width: calc(100% / 1.5);
    display: flex;
    flex-direction: column;
    justify-content: center;

    &Text {
        border: 1px solid red;
    }
`;

export const Text = styled.p`
    font-family: Poppins;
    font-size: 12px;

    &.title {
        font-size: 14px;
        color: #101d35;
        font-weight: 600;
        line-height: 1.2em;

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
`;

export const Circle = styled.p`
    border-radius: 50%;
    width: 9.38px;
    height: 9.78px;
    margin-right: 5px;
    border: 1.5px solid;

    &.blue {
        border-color: rgba(0, 123, 255, 0.7);
    }
`;

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 8px;
`;

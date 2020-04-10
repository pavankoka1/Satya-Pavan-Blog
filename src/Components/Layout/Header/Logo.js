import styled from "styled-components";
// eslint-disable-next-line import/no-unresolved

export const Wrapper = styled.div`
    width: 100%;
    background-color: #f8f8f8;
    height: 100px;

    display: flex;
    justify-content: center;
`;

export const InnerWrapper = styled.div`
    width: 100%;
    max-width: 1265px;
    height: 100%;
    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 75px;
        height: 75px;
    }
`;

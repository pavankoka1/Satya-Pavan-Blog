import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background-color: #f2f2f2;
    padding: 64px 0 48px;

    display: flex;
    justify-content: center;
`;

export const InnerWrapper = styled.div`
    width: 100%;
    max-width: 1265px;
    padding: 0 15px;

    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
`;

export const Left = styled.div`
    padding: 0 15px;
    width: calc(100% / 1.5);
`;

export const Right = styled.div`
    padding: 0 15px;
    width: calc(100% / 3);
`;

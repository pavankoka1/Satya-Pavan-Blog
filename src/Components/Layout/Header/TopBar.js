import styled from "styled-components";
// eslint-disable-next-line import/no-unresolved

export const Wrapper = styled.div`
    width: 100%;
    background-color: #101d35;
    height: 40px;

    display: flex;
    justify-content: center;
`;

export const InnerWrapper = styled.div`
    width: 100%;
    max-width: 1265px;
    padding: 0 15px;
    font-family: "Poppins";
    font-size: 12px;
    color: #7b7b7b;
    font-weight: 400;
    letter-spacing: 1px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Left = styled.div`
    width: 50%;

    display: flex;
    align-items: center;
`;

export const HamburgerIcon = styled.p`
    width: 50px;
    height: 40px;
    padding-right: 20px;
    margin-right: 20px;

    display: flex;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Today = styled.p`
    color: #fff;
    margin-left: 8px;
`;

export const Right = styled.div`
    height: 100%;
    padding-left: 20px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);

    display: flex;
    align-items: center;
`;

export const SearchText = styled.p`
    margin-left: 5px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 500;
`;

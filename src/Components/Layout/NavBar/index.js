import styled from "styled-components";
// eslint-disable-next-line import/no-unresolved

export const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    margin-bottom: 35px;
    border-bottom: 1px solid #eee;
    font-family: "Poppins";

    display: flex;
    justify-content: center;
`;

export const InnerWrapper = styled.div`
    width: 100%;
    max-width: 1265px;
    height: 100%;
    padding: 0 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Lists = styled.ul`
    display: flex;
`;

export const ListItem = styled.li`
    text-transform: uppercase;
    margin: 20px;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 1px;
    font-weight: 600;

    display: flex;
    align-items: center;
    cursor: pointer;

    transition: transform 0.2s;

    color: ${props => (props.isSelected ? "#e1677b" : "null")};

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        transform: scale(1.02);
    }
`;

export const Dot = styled.p`
    height: 4px;
    width: 4px;
    margin-right: 6px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const Icon = styled.img`
    padding: 20px 10px;
`;

import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    padding: 0 10px;
`;

export const Header = styled.div`
    margin-bottom: 20px;
    line-height: 36px;
    font-size: 18px;

    display: flex;
    flex-direction: row;
    align-items: center;

    &::before {
        content: "";
        padding: 4px;
        background-color: #e1677b;
        border-radius: 50%;
        margin-top: -2px;
    }
`;

export const HeaderText = styled.span`
    padding: 0 7px 0 7px;
    font-family: Poppins;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
`;

export const Divider = styled.p({
    backgroundColor: "#e4e4e4",
    width: "calc(100% - 147px)",
    height: "2px",
    marginTop: "-3px",
});

export const Cards = styled.div({
    display: "flex",
    flexDirection: "column",
});

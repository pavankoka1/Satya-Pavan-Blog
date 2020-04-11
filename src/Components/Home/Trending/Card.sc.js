import styled from "styled-components";

export const Wrapper = styled.div`
    width: calc(100% / 3);
    font-family: "Lora";
    color: "454262";
    font-size: 18px;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-bottom: 40px;
    }
`;

export const Description = styled.p`
    padding: 0 50px;
    font-family: Poppins;
    font-size: 19.2px;
    font-weight: 600;
    color: #101d35;
    line-height: 1.2em;
    margin-bottom: 20px;
    text-align: center;
    text-decoration: none;
    background-color: transperent;
`;

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 8px;
    align-items: center;

    img {
        width: 25px;
        height: 25px;
        border-radius: 50%;

        margin-top: -3px;
        margin-right: 7px;
        margin-bottom: 0;
    }
`;

export const AuthorName = styled.p`
    padding: 0;
    font-family: Poppins;
    font-size: 11px;
    color: #6e6e6e;
    line-height: 2em;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    font-weight: 500;
    margin-right: 20px;
`;

export const Circle = styled.p`
    margin-right: 5px;
    border: 1.5px solid rgba(0, 123, 255, 0.7);
    height: 10px;
    width: 10px;
    opactity: 0.7;
    border-radius: 50%;
`;

export const Date = styled.p`
    font-size: 11px;
    font-family: Poppins;
    color: #6e6e6e;
    margin: 0 20px 0 0;
    line-height: 2em;
    letter-spacing: 0.8px;
    font-weight: 500;
`;

import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://rsms.me/inter/inter.css');

    html {
        box-sizing: border-box;
        font-size: 62.5%;
        font-family: 'Inter', sans-serif;
    }

    body {
        margin: 0;
    }

    * {
        box-sizing: border-box;
    }
`;

export const Heading = styled.h1`
    margin: 0;
    font-weight: 500;
    color: white;
    flex-direction: row;
    font-size: 2.4rem;
    @media (min-width: 576px) {
        font-size: 2.8rem;
    }

    @media (min-width: 1024px) {
        font-size: 3.8rem;
    }
`;

export const Button = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    cursor: pointer;
    width: 100%;
    border: 1px solid rgba(27, 31, 35, 0.2);
    border-radius: 3px;
    padding: 0 1rem;
    font-size: 1.6rem;
    background-color #28a745;
    background-image: linear-gradient(-180deg, #34d058,#28a745 90%);
    font-weight: 600;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;

    &:hover {
        background-color: #269f42;
        background-image: linear-gradient(-180deg, #2fcb53, #269f42 90%);
        border-color: rgba(27,31,35,.5);
    }
`;

export const Label = styled.label`
    font-size: 1.6rem;
    color: ${props => props.theme.white};
    text-align: left;
    margin-bottom: 1rem;
    font-weight: 300;
`;

export const Input = styled.input`
    background-color: #404448;
    font-size: 1.6rem;
    color: white;
    outline: none;
    border: none;
    height: 40px;
    margin-bottom: 2rem;
    padding: 0 1rem;
`;
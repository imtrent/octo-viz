import styled from 'styled-components';
import { Input } from './../../styles/global';

export const Wrapper = styled.header`
    width: 100%;
    background-color: ${props => props.theme.colors.black};
    color: white;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    font-size: 1.4rem;

    p {
        margin: 0;
    }

    ${Input} {
        height: 28px;
        margin: 0;
    }

    .brand {
        font-weight: 500;
        font-size: 2rem;
        color: white;
        margin-right: 2.5rem;
    }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 455px;
    width: 100%;
    padding: 1.5rem;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    font-size: 1.2rem;

    a {
        font-size: 1.4rem;
        color: #0366d3;

        svg {
            top: 4px;
            position: relative;
        }
    }

    svg {
        margin-right: 0.5rem;

        path {
            fill: #586069;
        }
    }
`;

export const Info = styled.div`
    display: flex;

    p:not(:last-of-type) {
        margin-right: 1.5rem;
    }

    p {
        display: flex;
        align-items: center;
        color: #586069;
    }
`;
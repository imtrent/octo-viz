import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    padding: 2.5rem;

    img {
        width: 50px;
    }

    h1 {
        margin-bottom: 5rem;
    }

    p {
        font-size: 1.6rem;
        margin: 2rem 0;
    }

    form {
        display: flex;
        flex-direction: column;
        max-width: 500px;
        width: 100%;

        button {
            flex: 1 0 100%;
        }
    }
`;
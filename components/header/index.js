import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Wrapper, Content } from './style';
import { Container } from './../../styles/grid';
import { Input } from './../../styles/global';

const Header = ({ name }) => {
    const [user, setUsername] = useState('');

    const handleChange = (evt) => {
        const { value } = evt.target;

        setUsername(value);
    }

    useEffect(() => {
        name ? setUsername(name) : '';
    }, []);

    return (
        <Wrapper>
            <Container>
                <Content>
                    <Link href="/"><a className="brand">Github Visualizer</a></Link>
                    <Input placeholder="Username" onChange={handleChange} value={user} />
                </Content>
            </Container>
        </Wrapper>
    );
}

export default Header;
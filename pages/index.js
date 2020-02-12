import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Wrapper } from './../styles/search';
import { Heading, Label, Input, Button } from './../styles/global';

const Profile = ({ theme }) => {

    const [username, setUsername] = useState('');

    const handleChange = (evt) => {
        const { value } = evt.target;

        setUsername(value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    useEffect(() => {
        document.body.style.backgroundColor = '#24292E';
    })

    return (
        <Wrapper>
            <Head>
                <title>OctoViz - Visualize your github profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <img src="/github.png" alt="" />
                <p>OctoViz</p>
                <Heading>Visualize Your Github Profile</Heading>
            </div>
            <form onSubmit={handleSubmit}>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username" onChange={handleChange} value={username} placeholder="imtrent" required/>
                <Button>Search</Button>
            </form>
        </Wrapper>
    );
}

export default Profile;

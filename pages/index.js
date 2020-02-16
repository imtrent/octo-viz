import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Wrapper } from './../styles/search';
import { Heading, Label, Input, Button } from './../styles/global';

const Profile = ({ theme }) => {

    const [username, setUsername] = useState('');
    const [error, setError] = useState(false);

    const handleChange = (evt) => {
        const { value } = evt.target;

        setUsername(value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('submit');

        if (username === '') {
            setError(true);
            return;
        }

        Router.push(`/profile?id=${username}`);
    }

    useEffect(() => {
        document.body.style.backgroundColor = '#24292E';
    });

    return (
        <Wrapper>
            <Head>
                <title>Github Visualizer - Visualize your github profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <img src="/github.png" alt="" />
                <p>Github Visualizer</p>
                <Heading>Visualize Your Github Profile</Heading>
            </div>
            {error && <p className="error">Username is required</p>}
            <form onSubmit={handleSubmit}>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username" onChange={handleChange} value={username} placeholder="imtrent" />
                <Button>Search</Button>
            </form>
        </Wrapper>
    );
}

export default Profile;

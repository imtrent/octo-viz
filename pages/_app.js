import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './../styles/global';


const theme = {
    primary: '#0070f3',
    black: '#24292E',
    lightgreen: '#2FCB53',
    darkgreen: '#269F42',
    mediumgray: '#404448',
    lightgray: '#828487',
    white: '#FFFFFF'
}

const breakpoints = {
    small: '576px',
    medium: '768px',
    large: '992px'
}

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <ThemeProvider theme={theme} break={breakpoints}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }
}
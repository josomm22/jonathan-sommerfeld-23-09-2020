import React from 'react';
import Search from '../../components/Search';
import Weather from '../../components/Weather';

export default function Home({theme}) {

    return (
        <div className={`home-container ${theme}`}>
            <Search />
            <Weather />
        </div>
    )
};
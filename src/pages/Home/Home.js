import React, { useState, useEffect, useCallback } from 'react';
import Search from '../../components/Search';
import Weather from '../../components/Weather';

const defaultLocation = {
    id: "215854",
    name: "Tel Aviv"
}

export default function Home(props) {
    const [selectedLocationID, setSelectedLocationID] = useState("")
    const [selectedLocationName, setSelectedLocationName] = useState("")

    useEffect(() => {
        if (!selectedLocationID) {
            setSelectedLocationID(defaultLocation.id)
        }
        if (!selectedLocationName) {
            setSelectedLocationName(defaultLocation.name)
        }


    },[])

    return (
        <div className="home-container">
            <Search />
            <Weather />
        </div>
    )
};
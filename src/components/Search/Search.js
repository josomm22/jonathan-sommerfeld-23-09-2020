import React, { useState, useEffect } from 'react';
import { Input, AutoComplete, message } from 'antd'
import { handleSearch } from '../../API/fetch'

export default function Search({ updateCurrentLocation }) {
    const [selectedLocationName, setSelectedLocationName] = useState("")
    // const [selectedLocationID, setSelectedLocationID] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [options, setOptions] = useState([]);

    const onChange = value => {
        setSelectedLocationName(value);
    };

    const onSearch = async value => {

        const results = await handleSearch(value);
        console.log("result", results);
        if (results) {
            setSearchResults(results)
        }



    };

    const onSelect = value => {
        console.log("value", value);
        const locationID = searchResults.find(obj => obj.LocalizedName).Key;
        setSelectedLocationName(value);
        const locationObj = {id: locationID, name: value};
        updateCurrentLocation(locationObj);

    };

    const renderOptions = array => {
        const optionsArray = array.map(obj => {
            return {
                value: obj.LocalizedName,
                label: `${obj.LocalizedName}, ${obj.Country.LocalizedName}`
            }
        });
        return optionsArray

    };

    useEffect(() => {
        setOptions(renderOptions(searchResults));
    }, [searchResults])

    return (
        <div className="search-container">
            <AutoComplete
                dropdownClassName="search-dropdown"
                dropdownMatchSelectWidth={500}
                value={selectedLocationName}
                options={options}
                onSearch={onSearch}
                onSelect={onSelect}
                onChange={onChange}
                className="search-bar"
            >
                <Input.Search size="large" placeholder="search" />
            </AutoComplete>
        </div>

    )
};
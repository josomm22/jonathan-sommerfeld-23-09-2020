import React, { useState } from 'react';
import { AutoComplete, Button } from 'antd';
import { CompassTwoTone } from '@ant-design/icons';
import { handleSearch } from '../../API/fetch';
import { getCoordinates } from '../../API/geolocation';


const { Option } = AutoComplete;

export default function Search({ updateCurrentLocation }) {
    const [selectedLocationName, setSelectedLocationName] = useState("");
    const [searchResults, setSearchResults] = useState([])

    const onChange = value => {
        setSelectedLocationName(value);
    };

    const onSearch = async value => {
        if (value.length > 0) {
            const results = await handleSearch(value);
            if (results) {
                setSearchResults(results);
            };
        } else {
            setSearchResults([]);
        };


    };

    const onSelect = locationId => {
        const locationName = searchResults.find(obj => obj.Key === locationId).LocalizedName;
        setSelectedLocationName(locationName);
        const locationObj = { id: locationId, name: locationName };
        updateCurrentLocation(locationObj);

    };

    const handleLocation = async () => {
        const location = await getCoordinates();
        updateCurrentLocation(location)
    }


    return (
        <div className="search-container">
            <Button onClick={() => handleLocation()} className="search-geo">
                <CompassTwoTone /> Current Location
            </Button>
            <AutoComplete
                dropdownClassName="search-dropdown"
                defaultActiveFirstOption={false}
                dropdownMatchSelectWidth={500}
                value={selectedLocationName}
                placeholder="search"
                onSearch={onSearch}
                onSelect={onSelect}
                onChange={onChange}
                className="search-bar"
            >
                {searchResults.map((obj) =>
                    <Option key={obj.Key} value={obj.Key}>
                        {`${obj.LocalizedName}, ${obj.Country.LocalizedName}`}
                    </Option>
                )
                }
            </AutoComplete>
        </div>

    )
};